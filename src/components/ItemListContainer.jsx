// * Mostrar el listado de items/productos de nuestra tienda
// * de forma dinámica usando Array.map()

import getProducts from "../data/mockAPI";
import Item from "./Item";
import { useEffect, useState} from "react"

export default function ItemListContainer( props ){
  const [products, setProducts] = useState([]);
 
  useEffect( ()=>{
      console.log("1. Peticion de datos")
      const promiseData = getProducts();
      promiseData.then( (respuesta)=>{   
        console.log("3. Datos recibidos...", respuesta)
        setProducts(respuesta)

      }).catch( (error) => alert(`Error ${error}`))
  }, [])
   
  return <section>
    <h2>{props.greeting}</h2>
    <p>Nuestros productos</p>
    <div style={ { display: "flex", flexWrap: "wrap", justifyContent: "center"} }>
      {
        products.map( function(item) 
        { return <Item 
          key={item.id} 
          {...item}          
        />})
      }
    </div>
  </section>
}