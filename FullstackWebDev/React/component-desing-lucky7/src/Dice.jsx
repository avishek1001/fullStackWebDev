import './Dice.css'
import Die from './Die'

export default function Dice({ dice, color = "green" }) {
    return (
        <section className='Dice'>
            {
                dice.map((v, i) => (
                    <Die key={i} val={v} color={color} />
                ))
            }
        </section>
    );
}