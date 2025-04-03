import './Toggler.css'
import { useState } from "react";


export default function Toggler() {
    const [isHappy, setIsHappy] = useState(true);
    const toggleIsHappy = () => setIsHappy(!isHappy);
    return (
        <div>
            <p className="Toggler" onClick={toggleIsHappy}>
                {isHappy ? "🤣": "🖕"}
            </p>
        </div>
    )
}