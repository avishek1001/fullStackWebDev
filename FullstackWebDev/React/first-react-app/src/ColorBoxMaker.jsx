import './ColorBoxMaker.css'
import ColorBoxes from "./ColorBoxes";

export default function ColorBoxMaker({ colors }) {
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        boxes.push(<ColorBoxes colors={colors} />)
    }
    return (
        <div className="ColorBoxMaker">
            {boxes}
        </div>
    )
}