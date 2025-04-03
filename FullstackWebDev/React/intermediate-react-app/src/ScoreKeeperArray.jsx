import { useState } from "react"

export default function ScoreKeeperArray({ numPlayers = 3, target = 5 }) {

    const [scores, setScores] = useState(new Array(numPlayers).fill(0));


    // Intuitive way
    const changeScore = (idx) => {
        setScores((prevScore) => {
            const copy = [...prevScore];
            copy[idx] += 1;
            return copy;
        })
        
    }

    // Map Way
    const incrementScore = (idx) => {
        setScores(oldScore => {
            return (
                oldScore.map((score, i) => {
                    if(i === idx){
                        return score += 1
                    }
                    return score;
                })
            )
        })
    }

    return (
        <div>
            {
                scores.map((score, idx) => {
                    return (
                        <ul>
                            <li key={idx}>
                                Player{idx + 1} : {score}
                                <button onClick={() => (incrementScore(idx))}>+1</button>
                            </li>
                        </ul>
                    )
                })
            }
        </div>
    )
}