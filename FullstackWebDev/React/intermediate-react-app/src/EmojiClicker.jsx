import { v4 as uuid} from "uuid"
import { useState } from "react"

export default function EmojiClciker() {

    const [emojis, setEmojis] = useState([{id: uuid(), emoji: "🐒"}])

    const addEmoji = () => {
        setEmojis(oldEmoji => [...emojis, {id: uuid(), emoji: "🦍"}])
    }

    const deleteEmoji = (id) => {
        setEmojis(
            prevEmojis => {
                return prevEmojis.filter((f) => f.id !== id);
            }
        )        
    }

    return (
        <div>
            {
                emojis.map((i) => (
                    <span key={i.id} onClick={() => deleteEmoji(i.id)} style={{fontSize: "4rem"}}>{i.emoji}</span>
                ))
            }
            <br />
            <button onClick={addEmoji}>Add Emoji</button>
        </div>
    )
}