import "./PropertyList.css"
import Property from "./Property"

export default function PropertyList({properties}){
    return (
        <div className="container">
            {
                properties.map((i) => (
                    <Property name={i.name} price={i.price} rating={i.rating} key={i.id} />
                ))
            }
        </div>
    )
}