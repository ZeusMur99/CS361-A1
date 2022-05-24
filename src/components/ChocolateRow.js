import React from 'react'
import ChocolateQuantity from './ChocolateQuantity'

function ChocolateRow({item}) {
    return(
        <tr>
            <td>{item.name}</td>
            <td>{numberFormat(item.price)}</td>
            <td><ChocolateQuantity /></td>
        </tr>
    )
}

// format prices as USD: 2 decimal units and dollar sign
const numberFormat = (value) =>
  new Intl.NumberFormat('en-in', {
    style: 'currency',
    currency: 'USD'
  }).format(value);

export default ChocolateRow