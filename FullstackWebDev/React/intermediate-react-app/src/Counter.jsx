import {useState} from "react"

export default function Counter() {
    const [num, setNum] = useState(0);
    const addOne = () => {
        setNum(num + 1);
    }
    const addThree = () => {
        setNum((c) => c + 1);   //Updater function
        setNum((c) => c + 1);
        setNum((c) => c + 1);
    }
    return (
        <>  
            <p>{num}</p>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>
        </>
    )
}