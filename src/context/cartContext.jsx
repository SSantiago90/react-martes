import { createContext, useState } from "react";


// * 1: Crear un contexto -> createContext()
const cartContext = createContext("default value");

// 2. Renderizar el Provider del contexto -> <context.Provider>
// *2. Crear un Custom Provider del contexto -> context.provider con su propio VALUE
// * 3. Darle un "valor" o value al contenido del provider -> props.value

export function CartProvider( { children }){

  const [cartItems, setCartItems] = useState([]);
  // ? CRUD -> Create/Read/Update/Delete 

  function addItem(newItem) {
    const quantityCount = 1;
    //cartItems.push( {newItem: "Item"} ) -> MAL❌
    const newCart = structuredClone(cartItems)
    const isInCart = cartItems.some(item => item.id === newItem.id)

    if (isInCart) {
      const index = cartItems.findIndex(item => item.id === newItem.id)
      newCart[index].quantity += quantityCount
      alert("Sumaste otra unidad al carrito")
    }
    else {
      newItem.quantity = quantityCount
      newCart.push(newItem)
      alert("Agregaste al carrito!")
    }
    setCartItems(newCart)
  }

  function countCartItems() {
    let count = 0;
    cartItems.forEach(item => count += item.quantity)
    return count;
  }

  function removeItem(idToRemove){
    const newCart = cartItems.filter( itemInCart => itemInCart.id !== idToRemove)
    setCartItems(newCart)
  }
  
  // countTotalPrice()
  // removeUnitFromItem()
  // clearCart()  

  return (
    <cartContext.Provider value={{ cartItems, addItem, countCartItems, removeItem }}>
        { children }        
    </cartContext.Provider>
  )
}

export { cartContext }