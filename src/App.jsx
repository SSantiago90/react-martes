import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router'
import NotFound from './components/NotFound'

function App() {
  // * 1: Encapsular toda la app con BrowserRouter
  // * 2. Definimos el area a hacer navegable con Routes
  // * 3. Definimos routas con el componente Route -> cada path/url muestra un element/contenido

  return (  
    <main>   
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route 
            path="/" 
            element={  <ItemListContainer greeting="Bienvenido a mi tienda" />  } />            
            <Route
              path="/detalle/:idParam"      
              element={ <ItemDetailContainer />} />
            <Route
              path="/category/:categParam"
              element={ <ItemListContainer greeting="Categoría de Productos"/>}
            />

            <Route
              path="/cart"
              element={ <div><h1>Carrito de compras</h1> Proceder a comprar</div>}
            />  
           <Route path="*" element={ <NotFound />} /> 
        </Routes>

      </BrowserRouter>
    
    </main>
  )}



export default App
