import React, { useState } from 'react'
import{AiFillUpCircle, AiFillDownCircle} from 'react-icons/ai'

function ChocolateQuantity() {

    // initialze quantity to zero for all products
    const [quantity , setQuantity] = useState(0)

    // increment and decrement functions for up and down arrows
    const increment = () => setQuantity(quantity === 10 ? quantity : quantity + 1)
    const decrement = () => setQuantity(quantity === 0 ? quantity : quantity - 1)

    return(
        <div id="order-selection">
            <AiFillDownCircle onClick={decrement} class="pointer" />
            <span class="qv">{quantity}</span>
            <AiFillUpCircle onClick={increment} class="pointer" />
        </div>
    )
}

export default ChocolateQuantity