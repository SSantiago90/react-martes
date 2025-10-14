import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router"
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";

function CartContainer(){
  const [orderCreatedId, setOrderCreated] = useState(false);
  
  const { cartItems, removeItem } = useContext(cartContext);

  async function handleCheckout(buyer){
      // * { buyer: {}, cartItems: [..], total: 999, date: new Date()  }     
      const total = 9999;

      const newOrderConfirmed = await createOrder( { cartItems, total, buyer, date: new Date()} )
      console.log(newOrderConfirmed.toJSON());

      alert(`Gracias por tu compra! tu id de la orden es: ${newOrderConfirmed.id}`)
      setOrderCreated(newOrderConfirmed.id)
  } 

  if (orderCreatedId){
    return (
      <div>
        <h2>Gracias por tu compra!</h2>
        <p>Tu id de orden es: <strong>{orderCreatedId}</strong></p>
      </div>
    )
  }

  if (cartItems.length === 0 )
      {
          return <div>Tu carrito de compras está vacío <button>Ir al inicio</button></div>
      }

  return (
    <section>
      <div>
        <h2>Tu carrito de compras:</h2>
        <div style={{ display: "flex", gap: "50px"}}>
          {
            cartItems.map( itemInCart => <div>
              <h4>{itemInCart.title}</h4>
              <img width="80" src={itemInCart.img}></img>
              <p>Precio Unitario: ${itemInCart.price}</p>
              <p>Cantidad: ${itemInCart.quantity}</p>
              <strong>
                <p>Precio total: ${itemInCart.quantity * itemInCart.price} </p>
              </strong>
              <button onClick={ () => removeItem(itemInCart.id)}>🗑️</button>
            </div>
              )
          }
        </div>
        <hr/>
        <h4>Total a pagar: $9,999</h4>
      </div>
      
      <button>Vaciar carrito</button>
      <FormCheckout handleCheckout={ handleCheckout } />
     
    </section>
  )
}

export default CartContainer