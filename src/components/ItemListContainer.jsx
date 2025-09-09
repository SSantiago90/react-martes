// * Mostrar el listado de items/productos de nuestra tienda
// * de forma dinámica usando Array.map()

import getProducts from "../data/mockAPI";
import products from "../data/products"
import Item from "./Item";


export default function ItemListContainer( props ){
  
  console.log("1. Peticion de datos")
  const promiseData = getProducts();
  promiseData.then( (respuesta)=>{   
    console.log("3. Datos recibidos...", respuesta)
  }).catch( (error) => alert(`Error ${error}`))

  return <section>
    <h2>{props.greeting}</h2>
    <p>Nuestros productos</p>
    <div>
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