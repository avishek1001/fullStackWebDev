import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";


export default function ShoppingList() {
    const [list, setList] = useState([{item: "Demo Item", qty: 9}])

    const addItem = (productObj) => {
        setList(currentList => {
            return [...currentList, productObj]
        })
    }

    const deleteProduct = (idx) => {
        setList(currentList => {
            return currentList.filter((f, i) => i != idx)
        })
    }
    return(
        <>
            <ul>
                {
                    list.map((obj, idx) => {
                        return <li key={idx} onClick={() => deleteProduct(idx)}>{obj.item} : {obj.qty}</li>
                    })
                }
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </>
    )
}