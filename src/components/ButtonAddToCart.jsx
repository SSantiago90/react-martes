/* Estado 💓 */
/* Hooks 🪝  -> useState() */
import { useState } from "react";

export default function ButtonAddToCart(){
  //let statusInCart = "No agregaste al carrito😢"
  const [statusInCart, setStatusInCart] = useState("No agregaste aún al carrito😢")

  function handleClick(){
    alert("Agregado al carrito!");    
    setStatusInCart("Agregaste una unidad al carrito👌")   
  }
  
  return(
    <div>
      {/* camelCaseSyntax */}
      <button onClick={ handleClick } >Agregar al carrito</button>
      <div>
        <small>{statusInCart}</small>
      </div>
    </div>
  )
}