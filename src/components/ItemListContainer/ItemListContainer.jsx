import { getProducts, getProductsByCategory } from "../../data/firebase";
import Item from "./Item";
import { useEffect, useState} from "react"
import './ItemListContainer.css'
import { useParams } from "react-router";

export default function ItemListContainer( props ){
  const [products, setProducts] = useState([]);
  const { categParam } = useParams();
  

  useEffect( ()=>{
    if(categParam === undefined ){
      console.log("1. Peticion de datos")
      const promiseData = getProducts();
      promiseData.then( (respuesta)=>{   
        console.log("3. Datos recibidos...", respuesta)
        setProducts(respuesta)
        
      }).catch( (error) => alert(`Error ${error}`))
    }
    else {
      getProductsByCategory(categParam).then( response => setProducts(response)).catch( err => alert(err))
    }
  }, [categParam])
   
  return <section>
    <h2>{props.greeting}</h2>
    <p>Nuestros productos</p>
    <div className="item-list">
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