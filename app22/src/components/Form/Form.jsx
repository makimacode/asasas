import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { alertWarning } from '../helpers/sweetAlert'
import '../Form/formStyle.css'

export const Form = ({createOrder}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const {cart} = useContext(CartContext)
    const handleName = ({target})=>{
      setName(target.value)
    }

    const handleEmail = ({target})=>{
        setEmail(target.value)
    }

    const handlePhone = ({target})=>{
        setPhone(target.value)
    }


    const handleSubmit = (event)=>{
        event.preventDefault();

        if(name === '' || email === '' || phone === '' ){
            alertWarning('Porfavor llenar todos los campos');
            return;
        }
        if(cart.length === 0){
            alertWarning('No hay productos agregados al carrito');
            return;
        }
        const {target} = event;
        const buyer = {
            name: target.name.value,
            email: target.email.value,
            phone: target.phone.value
        
        }
        createOrder(buyer);
        setEmail('');
        setName('');
        setPhone('');
    }

  return (


    <form className="form-register" onSubmit={handleSubmit}>
    <h4>Checkout</h4>
    <input className="controls" type="text" name="name" value={name} onChange={handleName} placeholder="Ingrese su Nombre"/>
    <input className="controls" type="text" name="surname" placeholder="Ingrese su Apellido"/>
    <input className="controls" type="text" name="phone" value={phone} onChange={handlePhone} placeholder="Ingrese su Télefono"/>
    <input className="controls" type="email" name="email" value={email} onChange={handleEmail} placeholder="Ingrese su Correo"/>
    <button className="botons" type='submit'>Finalizar Compra</button>
    </form >


    // <form onSubmit={handleSubmit}>
    //     Nombre: <input 
    //         type="text" 
    //         name="name"
    //         value={name}
    //         onChange={handleName}  
    //     />
    //     Email: <input 
    //         type='email' 
    //         name="email"
    //         value={email}
    //         onChange={handleEmail}  
    //     />
    //     phone: <input 
    //         type='text' 
    //         name="phone"
    //         value={phone}
    //         onChange={handlePhone}  
    //     />
    //     <button type='submit'>Finalizar Compra</button>
    // </form>
  )
}
export default Form