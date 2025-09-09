import CartWidget from "./CartWidget";
import './NavBar.css'
export default function NavBar(){
  return <nav className="nav-bar">
    <p className="nav-logo">Tienda.com</p>
    <ul className="nav-menu">
      <li>Remera</li>
      <li>Gorros</li>
    </ul>
    <div className="nav-cart">
      <CartWidget />
    </div>
  </nav>
}