import { useState } from "react"



export default function UsernameForm() {

    const [username, setUsername] = useState("Avishek");

    const changeUsername = (evt) => {
        // console.log(evt.target.value)
        setUsername(evt.target.value)
    }


    return (
        <div>
            <input type="text" value={username} onChange={changeUsername}/>
            <button>Submit</button>
        </div>
    )
}