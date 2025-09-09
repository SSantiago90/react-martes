import { useState, useEffect } from "react"

export default function ItemColorPick(){
  const [color, setColor] = useState("#3eb61dff");

  // * 1 Montaje del componente
  // * 2 updates/actualizaciones del componente -> cambios de estado/props
  // * 3 Desmontaje
  console.log("Renderizando componente <ItemColorPick>")

  // ?  Effect / side-effect / Tarea de montaje
  useEffect( ()=>{
    console.warn("🟥Tarea compleja/conexiones a servicios/fetch de APIs")
    
    /* const botonPrueba = document.getElementById("boton-prueba")
    console.log(botonPrueba) */
  }, [])

  
  return (
    <div>
      <div>
        <button onClick={ () => setColor("#000000") }>Negro</button>
        <button onClick={ () => setColor("#3756c8ff") }>Azul</button>
        <button onClick={ () => setColor("#e64444ff") }>Rojo</button>
        <button onClick={ () => setColor("#82b951ff") }>Verde</button>
      </div>
      <p>Color seleccionado: 
        <span style={ { backgroundColor: color, width: "15px", height: "15px", display: "block", padding: "10px"} }></span>
      </p>
    </div>
  )
}