// key is asked by react for uniquely identifying an element
// not a must but written to avoid warnings
// key should be unique

import ShoppingListItem from "./ShoppingListItem"

export default function({items}) {
    return (
        <ul>
            {
                items.map((i) => (
                    <ShoppingListItem key={i.id} item={i.item} quantity={i.quantity} completed={i.completed} />
                ))
            }
        </ul>
    )
}