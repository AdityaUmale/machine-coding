const Settings = ({ data, setData }: { data: any, setData: any }) => {
    const { theme } = data;

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData((prevState: any) => ({
            ...prevState,
            theme: e.target.value,
        }))
    }
    return (
        <div>
            <div>
                <label>
                    <input type="radio" name="dark" checked={theme === "dark"} onChange={handleDataChange} />
                    Dark Theme
                </label>

            </div>
            <div>
                <label>
                    <input type="radio" name="light" checked={theme === "light"} onChange={handleDataChange} />
                    Light Theme
                </label>
            </div>
        </div>
    )
}

export default Settings;