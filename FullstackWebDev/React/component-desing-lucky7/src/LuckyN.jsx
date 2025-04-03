import Dice from "./Dice";
import { useState } from "react";
import { getRolls, sum } from "./utils";

export default function LuckyN({numDice = 2, total = 7, color}) {
    const [dice, setDice] = useState(getRolls(numDice))
    const isWinner = sum(dice) === total;

    const reRoll = () => {
        setDice(getRolls(numDice));
    }

    return (
        <div>
            <h1>Lucky{total} {isWinner ? ": Winner": "" }</h1>
            <Dice dice={dice} color={color} />
            <button onClick={reRoll}>Re-Roll</button>
        </div>
    )
}