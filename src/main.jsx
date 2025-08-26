import { createRoot } from 'react-dom/client'
import './index.css'
// Componente "<App>"
import App from './App.jsx'

// Tomamos el nodo raiz del HTML
const rootDiv = document.getElementById('root');

// lo asignamos como "root" de react
const reactRoot = createRoot(rootDiv);

// renderizamos nuestra App
reactRoot.render( <App/> );