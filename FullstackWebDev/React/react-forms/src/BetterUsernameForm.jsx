import { useState } from "react"


export default function BetterUsernameForm() {

    const [formdata, setFormdata] = useState({firstname: "", lastname: "", password: ""});

    const changeFormdata = (evt) => {
        const changedField = evt.target.name;
        const changedValue = evt.target.value
        setFormdata(changedData => {
            const copy = {...changedData}
            copy[changedField] = changedValue;
            return {...copy}
        })
    }

    const handleSubmit = () => {
        console.log(formdata)
    }


    return (
        <div>
            <label htmlFor="firstname">First Name</label>
            <input type="text" id="firstname" value={formdata.firstname} name="firstname" onChange={changeFormdata}/>

            <label htmlFor="lastname">Last Name</label>
            <input type="text" id="lastname" value={formdata.lastname} name="lastname" onChange={changeFormdata}/>

            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={formdata.password} name="password" onChange={changeFormdata}/>

            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}