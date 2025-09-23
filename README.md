
## Clonar este proyecto

Para clonar este proyecto:

    git clone https://github.com/SSantiago90/react-martes.git
    npm install
    npm run dev

# Pre-entrega Nº 2
 
 - Instalar react-router (npm i react-router)
 - Configurar en el componente App la navegación con los componentes: BrowserRouter, Routes, Route
 - Genera links con el componente Link para poder navegar
 - Crear ItemDetailContainer, mostrando los detalles de un producto
 - Crear Item, que representa la Card de cada producto dentro del listado
 - En IDC, leer la URL con useParams(), obtener el ID y buscar un unico producto con ese ID
 - EN ILC, leer la URL con useParams(), obtener la cteogria y buscar un listado de productos segun esa categoria
 - Tanto ItemDetail como ItemList, deben leer los datos de forma asíncrona ( useEffect - useState)