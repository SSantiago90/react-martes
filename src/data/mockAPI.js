// * function que al ser llamada, crea una promesa
import products from './products'

export default function getProducts(){
  /* return products */
  return new Promise( (resolve, reject) =>{
    console.log("2. Promesa creada, procesando...")
    setTimeout( () => resolve(products), 1500)
    //setTimeout( () => reject("Servicio no disponible :("), 2000)
  })
}
