import { useParams } from "react-router";
import ItemColorPick from "../ItemColorPick";
import { getProductById } from "../../data/mockAPI";
import { useEffect, useState } from "react";

function ItemDetailContainer(){  
  const { idParam } = useParams();
  const [product, setProduct] = useState({ loading: true});


  useEffect( () => {
    getProductById(idParam)
      .then( reponse => setProduct(reponse))
      .catch( error => alert(error))
  }, [])

  /* renderizado condicional */
  /* early return con if */
  if ( product.loading)
    {
      return(<h2>Cargando</h2>);
    }

  return(
     <div className="item-card">
      <h3 className="item-card-title">{product.title}</h3>
      <img className="item-card-img" src={product.img} alt={product.title}></img>
      <p className="item-card-price">Precio: ${product.price}</p>
      <p style={{ fontSize: "12px", opacity: "0.6"}}>{product.description}</p>
      <ItemColorPick />    
      <button>Agregar al carrito</button>  
      <hr/>     
    </div>
  )
}

export default ItemDetailContainer