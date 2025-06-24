const Profile = ({ data, setData }: { data: any, setData: any }) => {
    const { name, email, age } = data; 

    const handleDataChange = (e: React.ChangeEvent<HTMLInputElement>, item: string) => {
        setData((prevState: any) => ({
            ...prevState,
            [item]: e.target.value,
        }))
    }

    return (
        <div>
            <div>
                <label>Name:</label>
                <input type="text" value={name} onChange={(e) => handleDataChange(e, "name")}/>
            </div>
            <div>
                <label>Age:</label>
                <input type="text" value={age} onChange={(e) => handleDataChange(e, "age")} />
                
            </div>
            <div>
                <label>Email:</label>
                <input type="text" value={email} onChange={(e) => handleDataChange(e, "email")} />
                
            </div>

        </div>
    )
}

export default Profile;