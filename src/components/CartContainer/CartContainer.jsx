import { useContext } from "react"
import { cartContext } from "../../context/cartContext"
import { Link } from "react-router"

function CartContainer(){
  const { cartItems, removeItem } = useContext(cartContext)

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
      <Link to="/checkout">
        <button>Proceder a pagar</button>
      </Link>
    </section>
  )
}

export default CartContainer