import { useNavigate } from "react-router";

function NotFound(){
  const navigateTo = useNavigate()
  setTimeout( () => {
    navigateTo("/")
  }, 3000)

  return <div>
    <h1>404: Página no encontrada</h1>
    <p>Serás redirigido en unos segundos...</p>
    </div>
}

export default NotFound;