import './App.css'

// * Vite js COMPILA/TRANSPILA archivos JSX -> JS y HTML

//Componente principal APP.jsx
// class -> palabra reservada en JS
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
    border: "2px",
    borderColor: "white",
  }

  return (  
    <>
    { /* inline style */  }
    <section style={sectionStyles}>
      <h1>Hola mundo</h1>
      <h2>Bienvenido { usuario.name } a tu dashboard</h2>      
      <p>Hola, Luciana, tienes {usuario.age} años </p>      
      <div className="card">       
        <p>
          El estado del pago de tu servicio está: { isUserPaymentOK() }
        </p>
      </div>

      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </section>
    </>
  )
}

export default App
