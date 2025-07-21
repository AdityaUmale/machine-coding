import { useState } from "react";
import json from "./data.json"; // Assuming data.json is in the same directory

interface ListItem {
 id?: number;          // ← make it optional if children don’t have it
  name: string;
  isFolder: boolean;
  children?: ListItem[];
}

type Listprops = {
  list: ListItem[];
}

 const List = ({ list } : Listprops) => {

  const [isExpanded, setIsExpanded] = useState<Record<string, boolean>>({});
    return (
      <div className="container">
        {list.map((node: ListItem) => (
          <div key={node.id}>
            {node.isFolder && (
              <span
                onClick={() =>
                  setIsExpanded((prev) => ({
                    ...prev,
                    [node.name]: !prev[node.name], // Toggle the expansion state for the folder
                  }))
                }
              >
                {isExpanded?.[node.name] ? "-" : "+"}
              </span>
            )}
            <span>{node.name}</span>
            {isExpanded?.[node.name] && node?.children && <List list={node.children} />}
          </div>
        ))}
      </div>
    )
  }

export default function App() {
  const [data, setData] = useState(json);
    
  
  return (
    <div>
      <h1>File Explorer</h1>
      <List list={data} />
    </div>
  )
}