import { useState } from "react";

export default function FormCheckout(props) {
  const [formData, setFormData] = useState({
     username: "", email: "", phone: ""
  })

  console.log(formData)

  function handleSubmit(evt){
    evt.preventDefault();
    console.log("Formulario enviado", formData)
    props.handleCheckout(formData)
  }

  function handleInputChange(evt){
    const value = evt.target.value
    const inputName = evt.target.name
    // ? formData.username ->  formData["username"]
    const newFormData = { ...formData}
    newFormData[inputName] = value;
    setFormData(newFormData)
  }

  return(
    <form onSubmit={ handleSubmit } style={{ padding: "12px 8px", margin: "15px 5px", border: "solid 1px gray"}}>
       <label>Nombre
          <input onChange={handleInputChange} required name="username" type="text" value={formData.username} placeholder="Santiago"/>
       </label>
       <label>Email
          <input onChange={handleInputChange} required name="email" type="email" value={formData.email} placeholder="@"/>
       </label>
       <label>Phone
          <input onChange={handleInputChange} required  name="phone" type="tel" value={formData.phone} placeholder="123123"/>
       </label>

       <button type="">
          Confirmar
       </button>
       <button 
       onClick={ () => setFormData({username: "", email: "", phone: ""})}
        type="button">
          Reset
       </button>

    </form>
  )
}

//* Controlled components/froms
// ? useForms
// ? Formik