import React from 'react'
import ChocolateRow from './ChocolateRow'

function ChocolateTable({items}) {
    return(
        <>
        <table id="ordertable">
            <caption>Chocolate for sale</caption>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => <ChocolateRow item={item} key={i} />)}
            </tbody>
        </table>
        </>
    )
}

export default ChocolateTable