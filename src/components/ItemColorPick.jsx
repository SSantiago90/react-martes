import { useState } from "react"

export default function ItemColorPick(){
  const [color, setColor] = useState("#000000");

  /* Arrow Function () => {} */  
  return (
    <div>
      <div>
        <button onClick={ () => setColor("#000000") }>Negro</button>
        <button onClick={ () => setColor("#3756c8ff") }>Azul</button>
        <button onClick={ () => setColor("#e64444ff") }>Rojo</button>
        <button onClick={ () => setColor("#82b951ff") }>Verde</button>
      </div>
      <p>Color seleccionado: 
        <span style={ { backgroundColor: color, width: "10px", height: "10px", display: "inner-block", padding: "2px"} }></span>
      </p>
    </div>
  )
}