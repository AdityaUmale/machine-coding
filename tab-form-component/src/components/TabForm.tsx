import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
    const [data, setData] = useState({
        name: "Akshay",
        age: "29",
        email: "akshay@gmail.com",
        Interests: ["coding", "music"],
        theme: "dark",
    })

   const [errors, setErrors] = useState({
    name: "Name is not valid"
   });
   
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const tabs = [
        {
            name: "Profile",
            component: Profile,

        },
        {
            name: "Interests",
            component: Interests,

        },
        {
            name: "Settings",
            component: Settings,
        }
    ];

    const ActiveTabComponent = tabs[activeTab].component;

    const handleNextClick = () => {
        setActiveTab((prev) => prev + 1);
    }

    const handlePrevClick = () => {
        setActiveTab((prev) => prev - 1);
    }

    const handleSubmitClick = () => {
        console.log(data);
    }

    return (

        <div>
            <div className="heading-container">
                {tabs.map((t, index) => (
                    <div key={index} className="heading" onClick={() => setActiveTab(index)}>{t.name}</div>
                ))}
            </div>
            <div className="tab-body">
                <ActiveTabComponent data={data} setData={setData}/>
            </div>
            <div>
                {activeTab > 0 && <button>Prev</button>}
                {activeTab < tabs.length - 1 && <button>Next</button>}
                {activeTab === tabs.length - 1 && <button>Submit</button>}
            </div>


        </div>
    );
}

export default TabForm;