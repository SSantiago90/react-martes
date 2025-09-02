import ButtonAddToCart from './ButtonAddToCart';
import './Item.css'
import ItemColorPick from './ItemColorPick';
function Item( { title, img, price } ) {
  //console.log(props);
  // Destructuring / Destructurado
  // objeto { } -> extraerlas individualmente
  // const title = props.title
  // const { title, img, price } = props;
  
  return (
    <div className="item-card">
      <h3 className="item-card_title"> {title} </h3>
      <img className="item-card_img" src={img} alt="remera-img.jpg"></img>
      <p className="item-card_price">Precio: ${price.toFixed(2)}</p>
      <ButtonAddToCart />
      <hr/>
      <ItemColorPick />
    </div>
  )
}


export default Item;