import { useState } from 'react';
import './ColorBoxes.css'

export default function ColorBoxes({ colors }) {
    function randColor() {
        const colorPicker = Math.floor(Math.random() * colors.length);
        return colors[colorPicker];
    }

    const [color, setColor] = useState(randColor());
    const changeColor = () => {
        setColor(randColor());
    }

    return (
        <div className="ColorBox" style={{ backgroundColor: color }} onClick={changeColor}></div>
    )
}