import { getProducts, getProductsByCategory } from "../../data/firebase";
import Item from "./Item";
import { useEffect, useState} from "react"
import './ItemListContainer.css'
import { useParams } from "react-router";

export default function ItemListContainer( props ){
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { categParam } = useParams();
  
  useEffect( () =>{
    setIsLoading(true);
    setError(null);
    const promiseData = categParam === undefined ? getProducts() : getProductsByCategory(categParam);

    promiseData.then( (respuesta)=>{
      setProducts(respuesta)
    }).catch( (error) => {
      setError(error.message);
      console.error(error);
    }).finally( () => {
      setIsLoading(false);
    })
  }, [categParam])
   
  if (isLoading) {
    return <h2>Cargando productos...</h2>
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

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