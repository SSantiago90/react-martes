// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import products from "./products";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  authDomain: import.meta.env.VITE_FIRESTORE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_FIRESTORE_PROEJECTID,
  storageBucket: import.meta.env.VITE_FIRESTORE_BUCKET,
  messagingSenderId: "836080654787",
  appId: import.meta.env.VITE_FIRESTORE_APPID
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// * Leer en la base de datos

export async function getProducts(){
  // referencia a una coleccion
  const productsRef = collection(db, "products");

  // leer el estado de mi colección
  const productsSnapshot = await getDocs(productsRef)  
  // getDocs(productsRef).then ( (snapshot) => { ... } )

  // mapear el array de docs a un array de docs.data()
  const dataDocs = productsSnapshot.docs.map( doc => {
    return { id: doc.id, ...doc.data() }
  } )

  //reject
  if (dataDocs.length < 1)
    throw( new Error("No encontramos ningùn resultado"));

  return dataDocs;
}



/**
 * Retorna un producto de firestore
 * @param idParam {string} id: representa el id del producto
 */
export async function getProductById(idParam){
  // 1 -> Referencia a UN document -> getDoc(ref)
  const docRef = doc(db, "products", idParam)
  const documentSnapshot = await getDoc(docRef);
  return { id: documentSnapshot.id, ...documentSnapshot.data()}  
}

export async function getProductsByCategory(categParam){
   const productsRef = collection(db, "products");

   // Creamos la custom query
   //const q = query(collection(db, "cities"), where("capital", "==", true));
   const q = query(productsRef, where("category", "==", categParam ));

   const productsSnapshot = await getDocs(q);

   const dataDocs = productsSnapshot.docs.map( doc => ( { id: doc.id, ...doc.data()}) )
   
   //reject
    if (dataDocs.length < 1)
    throw( new Error("No encontramos ningùn resultado"));

   return dataDocs
}

// * escribir en la base de datos

// *. Guardar la compra realizada por el usuario
export async function createOrder(orderData){
  // referencia a una colección -> orders
  const ordersRef = collection(db, "orders");

  // agregar el documento a esa colectionRef -> addDoc()
  const newDoc = await addDoc(ordersRef,orderData)  
  return newDoc;
}

// *. Function helper -> exportar todos los products a firestore
export async function subirProductosAFirestore(){
  // ! forEach() -> async -> MAL
  
  // ? for ... of  -> OK
  // products.forEach( item => {})
  for(let item of products) {
    delete item.id;
    const newDoc = await addDoc(collection(db, "products"), item)
    console.log("item created", newDoc.id)
  }
}

export default app;