import { useState } from "react"

export default function ItemCount( {max, min, onAddToCart}){
  const [count, setCount] = useState(1);

  const handleSubstract = () => { if(count > min) setCount(count-1)} 
  const handleAdd = () => { if(count < max) setCount(count+1)} 

  return (
    <div>
      <button onClick={handleSubstract} >-</button>
       <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <br/>
      <button onClick={ ()=> onAddToCart(count)}>Agregar</button>
    </div>
  )
}