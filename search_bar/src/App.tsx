import { useEffect, useState } from "react";


export default function App(){
  const [input, setInput] = useState("");
  const [results, setResults] = useState<{ id: number; name: string }[]>([]);
  const [showResults, setShowResults] = useState(false); 
  const [cache, setCache] = useState<{ [key: string]: { id: number; name: string }[] }>({})

  const fetchData = async () => {
    if(cache[input]){
      setResults(cache[input]);
      return;
    }
    const data = await fetch("https://dummyjson.com/recipies/search?q=" + input);
    const json = await data.json();
    setResults(json.recipes); 
    setCache(prev => ({...prev, [input]: json.recipes}))
  }

  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="App">
      <h1>Autocomplete Search Bar</h1>
      <div>
        <input type="text" className="search-input" value={input} onChange={(e) => setInput(e.target.value)} onFocus={() => setShowResults(true)} onBlur={() => setShowResults(false)}/>
        {showResults && (
          <div className="results-container">
          {results.map((r) => <span className="result" key={r.id}>{r.name}</span>)}
        </div>
        )}
      </div>

    </div> 
  )
}