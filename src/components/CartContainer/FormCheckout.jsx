import { useState } from "react";

export default function FormCheckout(props) {   
   const [formData, setFormData] = useState(
      { username: "", phone: "", email: ""}
   );

   function handleInputChange(event){
      const { value, name } = event.target
      // ? formData.username ==  formData["username"]
      const newFormData = {...formData}
      newFormData[name] = value;
      setFormData(newFormData)
   }

   function resetForm(){
     setFormData({ username: "", phone: "", email: ""});
   }

   function handleSubmit(event){
      event.preventDefault();
      alert("Form enviado...")
      props.handleCheckout(formData)
   }

   function handleNumberInputChange(event){
      console.log(event.key);
      ( ! [1,2,3,4,5,6,7,8,9,0].includes( Number(event.key))) && event.preventDefault() ;     
   }
   
  return(
   <form onSubmit={ handleSubmit }>
      <label>Nombre
        <input 
        value={formData.username}
         onChange={handleInputChange}
         type="text" 
         name="username" />
      </label>
      <label>Email
        <input 
        value={formData.email}
        onChange={handleInputChange}
        type="email" 
        name="email" />
      </label>
      <label>Teléfono
        <input       
        value={formData.phone}
         onChange={handleInputChange}   
         onKeyDown={ handleNumberInputChange }          
         type="tel" 
         name="phone" 
        />
      </label>
      <button type="submit">Enviar</button>
      <button type="button" onClick={resetForm}>Limpiar Form</button>
   </form>
  )
}