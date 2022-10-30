import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'

import { useForm } from '../../useForm'


export const Form = ({createOrder}) => {
    
    const {name,surname,phone,email,onInputChange,onResetForm}=useForm({
        name:'',
        surname:'',
        phone:'',
        email:''
    })
    
    const {cart} = useContext(CartContext)

    const handleSubmit = (event)=>{
        event.preventDefault();

        if(name === '' || email === '' || phone === ''){
            //alertWarning('Porfavor llenar todos los campos');
            return;
        }
        if(cart.length === 0){
           //alertWarning('No hay productos agregados al carrito');
            return;
        }

        const buyer = {
            name,
            surname,
            email,
            phone
        }
        createOrder(buyer);
        onResetForm()
    }

  return (


    <form className="form-register" onSubmit={handleSubmit}>
    <h4>Checkout</h4>
    <input className="controls" type="text" name="name" value={name} onChange={onInputChange} placeholder="Ingrese su Nombre"/>
    <input className="controls" type="text" name="surname" value={surname} onChange={onInputChange} placeholder="Ingrese su Apellido"/>
    <input className="controls" type="text" name="phone" value={phone} onChange={onInputChange} placeholder="Ingrese su Télefono"/>
    <input className="controls" type="email" name="email" value={email} onChange={onInputChange} placeholder="Ingrese su Correo"/>
    <button className="botons" type='submit'>Finalizar Compra</button>
    </form >

  )
}