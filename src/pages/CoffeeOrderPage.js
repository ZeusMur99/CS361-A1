import React from 'react'
import CoffeeTable from '../components/CoffeeTable'
import SubmitOrder from '../components/SubmitOrder'

// Displays the shopping page
// Contains the required <h2> and <p> tags
// Followed by table containing items and buttons to modify quantities
function CoffeeOrderPage({items}){
    return(
        <>
        <article className='shopping-article'>
            <h2>Available Items</h2>
            <p>Select how many of each item you would like (up to 10).</p>
            <CoffeeTable items={items} />
            <br />
            <button type="submit">Submit</button>
        </article>
        </>
    )
    
}

export default CoffeeOrderPage