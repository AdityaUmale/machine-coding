const Interests = ({ data, setData }: { data: any, setData: any }) => {
    const { Interests } = data;

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>, name: string) => {
        setData((prevState: any) => ({
            ...prevState,
           Interests: e.target.checked ? [...prevState.Interests, e.target.name] : prevState.Interests.filter((item: string) => item !== e.target.name)
        }))
    }
    return (
        <div>
            <div>
                <label>
                    <input type="checkbox"
                    name="coding"
                    checked={Interests.includes("coding")} 
                    onChange = {handleDataChange}/>
                    Coding
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox"
                    name="coding"
                    checked={Interests.includes("music")} />
                    Music
                </label>
            </div>
            <div>
                <label>
                    <input type="checkbox"
                    name="coding"
                    checked={Interests.includes("javascript")} />
                    Javascript
                </label>
            </div>
        </div>
    )
}

export default Interests;