import { useState } from "react";
import Box from "./Box";

export default function BoxGrid() {
    const [boxes, setBoxes] = useState([false, true, false]);
    
    const reset = () => {
        setBoxes([false, false, false])
    }

    const toggleBoxes = (idx) => {
        // setBoxes(oldBoxes => {
        //     const copy = [...oldBoxes];
        //     copy[idx] = !copy[idx];
        //     return copy;
        // })

        setBoxes(oldBoxes => {
            return oldBoxes.map((v, i) => {
                if(i === idx) {
                    return !v;
                } else {
                    return v;
                }
            })
        })
    }

    return (
        <div>
            {
                boxes.map((b, idx) => (
                    <Box toggle={() => toggleBoxes(idx)} isActive={b} />
                ))
            }

            <button onClick={reset}>Reset</button>
        </div>
    )
}