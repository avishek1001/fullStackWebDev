function handleClick() {
    console.log("Button Clicked");
}

function handleOnMouseOver() {
    console.log("Hovered");
}




export default function Clicker({ message, buttonText }) {
    const messageClick = () => {
        alert(message)
    }
    return (
        <div>
            {/* <p onMouseOver={handleOnMouseOver}>Click Me</p> */}
            <button onClick={messageClick} >{buttonText}</button>
        </div>
    )
}