import React from 'react';

// Styles
import '../../styles/cardState/ReadyToDelivery.css'

export default function HistoryCard({ order, index }) {

    console.log(order.date.toDate())
  return(
    <div className='Cooking-card' key={index+'readyToDelivery'}>
        <div className='Info-name-clock'>
          <div className='Name-client'>
            <h3>Cliente:</h3>
            <p>{order.name}</p>
          </div>
          <div className='Total'>
            <p>{}</p>
          </div>
        </div>
        
      <div className='Order-products'>
        <ul className='Cooking-card-quantity'>
          Cantidad
          {order.products.map((product,index)=>(
            <li key={index+"quantity"}>{product.quantity}</li>
          ))}
          
        </ul>
        <ul className='Cooking-card-products'>
          Producto
          {order.products.map((product,index)=>(
            <li key={index +"product"}>{product.product}</li>
          ))}
        </ul>
        <ul className='Cooking-card-products'>
          Precio
          {order.products.map((product,index)=>(
            <li key={index+"price"}>{'$ '+ product.price}</li>
          ))}
        </ul>
      </div>
      <p>{order.time}</p>
    </div>
  )
}