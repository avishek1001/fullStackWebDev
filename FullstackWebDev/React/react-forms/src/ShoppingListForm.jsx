import { useState } from "react"

export default function ShoppingListForm({ addItem }) {

    const [product, setProduct] = useState({ item: "Apple", qty: 5 });

    const handleChange = (evt) => {
        // console.log(evt.target.value)

        setProduct(currentItem => {
            return { ...currentItem, [evt.target.name]: evt.target.value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(product);
        addItem(product);
        setProduct({item: "", qty: 0})
    }

    return (
        <form onSubmit={handleSubmit}>
            {/* <h1>{product.item} : {product.qty}</h1> */}
            <label htmlFor="item">Item : </label>
            <input type="text" id="item" value={product.item} name="item" onChange={handleChange} />
            <br />
            <label htmlFor="qty">Quantity : </label>
            <input type="number" id="qty" min={0} value={product.qty} name="qty" onChange={handleChange} />
            <br />
            <button>Add Product</button>
        </form>
    )
}