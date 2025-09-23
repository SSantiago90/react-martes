// * function que al ser llamada, crea una promesa
import products from './products'

export default function getProducts(){
  /* return products */
  return new Promise( (resolve) =>{
    console.log("2. Promesa creada, procesando...")
    setTimeout( () => resolve(products), 1500)
    //setTimeout( () => reject("Servicio no disponible :("), 2000)
  })
}

export function getProductById(idParam){
  const promiseProduct = new Promise( (resolve, reject) => {
    const productRequested = products.find( item => item.id === Number(idParam) )    
    console.log("Devolviendo producto... ", productRequested)    
    setTimeout( () => {
      if (productRequested){
        resolve(productRequested)
      }
      else{
        reject("Item no encontrado")
      }
    }
      , 1000)
  })
  return promiseProduct;
}

export function getProductsByCategory(categParam){
  const promiseProduct = new Promise( (resolve, reject) => {
    const productsRequested = products.filter( item => item.category === categParam )
    console.log("Devolviendo productos según categoria... ", productsRequested)
    setTimeout( () => resolve(productsRequested), 1000)
  })
  return promiseProduct;
}


/* 
[].forEach  -> iterar
[].map -> generar un nuevo array del mismo tamaño / transformamos el array
[].find -> {} buscamos un unico elemento que cumpla una condicion
[].filter -> [] buscamos todos los elementos que cumpla una condicion */