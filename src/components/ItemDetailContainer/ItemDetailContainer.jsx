import { useParams } from "react-router";
import ItemColorPick from "../ItemColorPick";
import { getProductById } from "../../data/firebase";
import { useEffect, useState } from "react";
import { cartContext } from "../../context/cartContext";
import { useContext } from "react";
import ItemCount from "./ItemCount";

function ItemDetailContainer(){  
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { idParam } = useParams();
  const { addItem }= useContext(cartContext)

  useEffect( () => {
    setIsLoading(true);
    setError(null);

    getProductById(idParam)
      .then( reponse => setProduct(reponse))
      .catch( error => {
        setError(error.message);
        console.error(error);
      })
      .finally( () => setIsLoading(false));
  }, [idParam])

  function handleAddToCart(count){
    addItem(product, count)
  }

  if (isLoading) {
    return(<h2>Cargando...</h2>);
  }

  if (error) {
    return <h2>Error: {error}</h2>
  }

  return(
     <div className="item-card">
      <h3 className="item-card-title">{product.title}</h3>
      <img className="item-card-img" src={product.img} alt={product.title}></img>
      <p className="item-card-price">Precio: ${product.price}</p>
      <p style={{ fontSize: "12px", opacity: "0.6"}}>{product.description}</p>
      <ItemColorPick />   
      <ItemCount max={product.stock} min={1} onAddToCart={handleAddToCart} /> 

      <hr/>     
    </div>
  )
}

export default ItemDetailContainer