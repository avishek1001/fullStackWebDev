export default function ShoppingListItem({item, quantity, completed}) {
    const styles = {color: completed ? "green" : "red", textDecoration: completed ? "line-through" : "none"};
    return (
        <li style={styles}>{item} - {quantity}</li>
    )
}

// {
//     items.map((i) => (
//         <li key={i.id}
//             style={{
//                 color: i.completed ? "green" : "red",
//                 fontSize: "40px",
//                 textDecoration: i.completed ? "line-through" : "none"
//             }}>
//             {i.item} - {i.quantity}
//         </li>
//     ))
// }
// from ShoppingList.jsx: reusing the <li> component