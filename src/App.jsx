import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router'
import NotFound from './components/NotFound'
import { CartProvider } from './context/cartContext'
import CartContainer from './components/CartContainer/CartContainer'
import { subirProductosAFirestore } from './data/firebase'


function App() {
  
  return (  
    <main>   
      <CartProvider>
        <BrowserRouter>
          <NavBar/>
          <button onClick={subirProductosAFirestore}>
            Exportar array
          </button>
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
                element={ <CartContainer />}
              />  
            <Route path="*" element={ <NotFound />} /> 
          </Routes>
        </BrowserRouter>    
      </CartProvider>
    </main>
  )}

function MyButton( { children } ){
  return <button>{ children }</button>
}

export default App
