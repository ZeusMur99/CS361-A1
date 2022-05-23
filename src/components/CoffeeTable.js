import React from 'react'
import CoffeeTableRow from './CoffeeTableRow'

function CoffeeTable({items, quantity}) {
    return (
        <>
        <table id="ordertable">
            <caption>Coffee for sale</caption>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <CoffeeTableRow item={item} key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default CoffeeTable