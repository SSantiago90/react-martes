import './Item.css'
import ItemColorPick from '../ItemColorPick';
import { Link } from 'react-router'; 

function Item( { id, title, img, price, description } ) {  

  return (
    <div className="item-card">
      <h3 className="item-card-title"> {title} </h3>
      <img className="item-card-img" src={img} alt="remera-img.jpg"></img>
      <p className="item-card-price">Precio: ${price.toFixed(2)}</p>
      <p style={{ fontSize: "12px", opacity: "0.6"}}>{description}</p>
      <ItemColorPick />
      <hr/>
      <Link to={ `/detalle/${id}` }>
        <button>Ver detalle</button>
      </Link>
    </div>
  )
}


export default Item;