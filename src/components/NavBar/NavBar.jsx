import CartWidget from "./CartWidget";
import './NavBar.css'
import { Link } from "react-router";

export default function NavBar(){
  return <nav className="nav-menu">
    <Link to="/">
      <p className="nav-logo">Tienda.com</p>
    </Link>
    <ul className="nav-links">
      <Link to="/category/Electrónica">
        <li>Electrónica</li>
      </Link>
       <Link to="/category/Ropa">
        <li>Vestimenta</li>
      </Link>
      <Link to="/category/Libros">
        <li>Libros</li>
      </Link>
    </ul>
    <div className="nav-cart">
      <Link to="/cart">
        <CartWidget />
      </Link>
    </div>
  </nav>
}