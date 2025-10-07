import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router"
import { createOrder } from "../../data/firebase";

function CartContainer(){
  const [orderCreatedId, setOrderCreated] = useState(false);
  
  const { cartItems, removeItem } = useContext(cartContext);

  async function handleCheckout(){
      // * { buyer: {}, cartItems: [..], total: 999, date: new Date()  }
      const buyer = { name: "Luciana", email: "lu@yahoo.com", phone: "123123123"};
      const total = 9999;

      const newOrderConfirmed = await createOrder( { cartItems, total, buyer, date: new Date()} )
      console.log(newOrderConfirmed.toJSON());

      // 1. Alert / sweet-alert / toast
      alert(`Gracias por tu compra! tu id de la orden es: ${newOrderConfirmed.id}`)

      // 2. Renderizado condicional
      setOrderCreated(newOrderConfirmed.id)

      // 3. Redirigir a otro componente
      // useNavigate() -> /orders/UZGWodoNZNt9D69bO6uL
      // <OrderContainer> -> getDoc() -> estado de la orden

      // TODO: VACIAR CARRITO!
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
      <button onClick={ handleCheckout }>Confirmar compra</button>
      
      <Link to="/checkout">
        <button>Checkout - TODO</button>
      </Link>
    </section>
  )
}

export default CartContainer