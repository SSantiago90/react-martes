import { useContext } from "react"
import { cartContext } from "../../context/cartContext"

export default function CartWidget(){

  // * 4. Consumir un context -> useContext(<contextName>)
  const { countCartItems } = useContext(cartContext)

  return <span>🛒 { countCartItems() } </span>
}