import React from 'react';

// Styles
import '../../styles/cardState/CookingCard.css'

export default function HistoryCard({ order, index }) {
  const day = order.date.toDate().getDate();
  const month = order.date.toDate().getMonth();
  const year = order.date.toDate().getFullYear();
  
  return(
    <div className='Cooking-card' key={index+'readyToDelivery'}>
        <div className='Info-name-clock'>
          <div className='Name-client'>
            <h3>Cliente:</h3>
            <p>{order.name}</p>
          </div>
          <div className='Cooking-time'>
            <i className="far fa-calendar-check"></i>
            <p>{ `${day}/${month+1}/${year}` }</p>
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

        <ul className='Cooking-card-price'>
          Precio
          {order.products.map((product,index)=>(
            <li key={index+"price"}>{'$ '+ product.price}</li>
          ))}
        </ul>
      </div>

      <p className="Red-text">{`Pedido terminado en ${order.time}`}</p>
    </div>
  )
}
