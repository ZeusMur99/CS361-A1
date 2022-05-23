import React from 'react'
import CoffeeQuantity from './CoffeeQuantity'

function CoffeeTableRow({item}) {
    return(
        <tr>
            <td>{item.name}</td>
            <td class="item-price">{numberFormat(item.price)}</td>
            <td><CoffeeQuantity /></td>
        </tr>
    )
}

const numberFormat = (value) =>
  new Intl.NumberFormat('en-in', {
    style: 'currency',
    currency: 'USD'
  }).format(value);

export default CoffeeTableRow