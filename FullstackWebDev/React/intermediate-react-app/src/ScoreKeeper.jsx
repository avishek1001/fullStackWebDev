import { useState } from "react"

export default function ScoreKeeper() {
    const [scores, setScores] = useState({ p1Score: 0, p2Score: 0 });
    
    const increaseP1Score = () => {
        setScores((oldScore) => {
            return { ...oldScore, p1Score: oldScore.p1Score + 1 }
        })
    }

    const increaseP2Score = () => {
        setScores((oldScore) => {
            return { ...oldScore, p2Score: oldScore.p2Score + 1 }
        })
    }

    return (
        <div>
            <p>Player1 : {scores.p1Score}</p>
            <p>Player2 : {scores.p2Score}</p>
            <button onClick={increaseP1Score}>Player1++</button>
            <button onClick={increaseP2Score}>Player2++</button>
        </div>
    )
}