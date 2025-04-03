import './App.css'
import Greeter from './Greeter'
import Slots from './Slots'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'
import Form from './Form'
import Counter from './Counter'
import Toggler from './Toggler'
import ColorBoxes from './ColorBoxes'
import ColorBoxMaker from './ColorBoxMaker'

// const data = [
//   {id: 0, item: "Orange", quantity: 5, completed: true},
//   {id: 1, item: "Apple", quantity: 10, completed: false},
//   {id: 2, item: "Chocolate", quantity: 100, completed: true}
// ]

const properties = [
  { id: 1, name: "Desert Yurt", rating: 4.9, price: 150 },
  { id: 2, name: "Lone Mountain Cabin", rating: 4.8, price: 250 },
  { id: 3, name: "Cactus Retreat", rating: 4.7, price: 300 },
  { id: 4, name: "Oceanview Condo", rating: 4.6, price: 450 }
]

function App() {
  return (
    <div>
      {/* <Greeter person="Jhon" from="Avishek" />
      <Greeter person="Emily" from="Avishek" />
      <Slots val1="A" val2="A" val3="b"/>
      <Slots val1="A" val2="A" val3="A"/>
      <Slots val1="🍑" val2="🍑" val3="🍑"/> */}
      {/* <ShoppingList items={data} /> */}

      {/* <PropertyList properties={properties} /> */}
      {/* <Clicker message="HI!!!" buttonText="Click Me" />
      <Clicker message="😤" buttonText="Dont Click Me" /> */}
      {/* <Form /> */}

      {/* <Counter /> */}
      {/* <Toggler /> */}

      <ColorBoxMaker colors={[
        "#FF6B6B",
        "#FFBE0B",
        "#FB5607",
        "#8338EC",
        "#3A86FF",
        "#4ECDC4",
        "#06D6A0",
        "#45B7D1",
        "#FF006E",
        "#A2D729",
        "#FFD166",
        "#EF476F",
        "#118AB2",
        "#073B4C",
        "#7209B7",
        "#F15BB5"
      ]} />



    </div>
  )
}

export default App
