import './App.css'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  const usuario = {
    name: "Luciana",
    age: "20",
    color: "#4f4e80ff"
  }

  function isUserPaymentOK(){
    // ....
    return "Todo ok👌"
  }

  const sectionStyles = { 
    backgroundColor: usuario.color, 
    padding: "20px",
    border: "solid 2px yellow",
    display: "none",
  }

  return (  
    <div>   
    <NavBar/>
    <ItemListContainer greeting="Bienvenido a mi tienda" />
    
    <section style={sectionStyles}>     
      <h2>Bienvenido { usuario.name } - Código clase 1 & 2</h2>      
      <p>Hola, Luciana, tienes {usuario.age} años </p>      
      <div className="card">       
        <p>
          El estado del pago de tu servicio está: { isUserPaymentOK() }
        </p>
      </div>
      <hr/>
        {/* Attributos HTML -> Props */}
        <div className="flex-row">
        </div>

    </section>
    </div>
  )
}



export default App
