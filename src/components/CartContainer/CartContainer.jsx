import { useContext, useState } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router";
import { createOrder } from "../../data/firebase";
import FormCheckout from "./FormCheckout";


function CartContainer(){
  const [orderCreatedId, setOrderCreated] = useState(null); 
  
  const { cartItems, removeItem, clearCart } = useContext(cartContext);

  async function handleCheckout(buyer){
     try {        
        const newOrder = {
          buyer,
          items: cartItems,
          total: 999,
          date: new Date(),
        };
        const newOrderConfirmed = await createOrder(newOrder);
        setOrderCreated(newOrderConfirmed.id);
        clearCart();
      } catch (error) {
        console.error("Error enviando los datos", error.message);
      } 
  } 

  if (orderCreatedId){
    return (
      <div>
        <h2>Gracias por tu compra!</h2>
        <p>Tu id de orden es: <strong>{orderCreatedId}</strong></p>
        <Link to="/">Volver al inicio</Link>
      </div>
    )
  }

  if (cartItems.length === 0 )
      {
          return <div>Tu carrito de compras está vacío <Link to="/"><button>Ir al inicio</button></Link></div>
      }

  return (
    <section>
      <div>
        <h2>Tu carrito de compras:</h2>
        <div style={{ display: "flex", gap: "50px"}}>
          {
            cartItems.map( itemInCart => <div key={itemInCart.id}>
              <h4>{itemInCart.title}</h4>
              <img width="80" src={itemInCart.img} alt={itemInCart.title}></img>
              <p>Precio Unitario: ${itemInCart.price}</p>
              <p>Cantidad: {itemInCart.quantity}</p>
              <strong>
                <p>Precio total: ${itemInCart.quantity * itemInCart.price} </p>
              </strong>
              <button onClick={ () => removeItem(itemInCart.id)}>🗑️</button>
            </div>
              )
          }
        </div>
        <hr/>
        <h4>Total a pagar: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0)}</h4>
      </div>
      <FormCheckout handleCheckout={handleCheckout}/>
     
    </section>
  )
}

export default CartContainer