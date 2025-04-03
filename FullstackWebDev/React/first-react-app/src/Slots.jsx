export default function Slots({val1, val2, val3}) {
    const isWinner = val1 === val2 && val2 === val3;
    return (
        <>
            <h1>{val1+ " " + val2 + " " + val3}</h1>
            <h2 style={{color: isWinner? "green": "red"}}>{isWinner ? "You Win!": "You Lose!!"}</h2>
            {isWinner ? <h3 style={{color: "Purple"}}>Congrats</h3>: null}
        </>
    )
}