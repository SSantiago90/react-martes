import './App.css'
import Item from './components/Item'

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
  }

  return (  
    <>   
    <section style={sectionStyles}>
      <h1>Hola mundo</h1>
      <h2>Bienvenido { usuario.name } a tu dashboard</h2>      
      <p>Hola, Luciana, tienes {usuario.age} años </p>      
      <div className="card">       
        <p>
          El estado del pago de tu servicio está: { isUserPaymentOK() }
        </p>
      </div>
      <hr/>
       <h2>Clase 2: Componentes</h2>

        {/* Attributos HTML -> Props */}
        <div className="flex-row">

        <Item           
          title="Remera" 
          price={ 2000 }
          img="https://acdn-us.mitiendanube.com/stores/002/866/300/products/remera-artless-c6cb7d6317fbf8784217495849023518-1024-1024.jpg"
          />
        <Item title="Gorro" price={1200.50} img="https://i.pinimg.com/736x/26/e2/e4/26e2e494eaea862aaa11f1403bdf621e.jpg"/>
        <Item title="Zapatilla" price={3500} img="https://www.moov.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dw539467d5/products/NI_554724-122/NI_554724-122-1.JPG"/>    
        </div>

        </section>
    </>
  )
}



export default App
