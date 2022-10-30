// import { useState, useContext } from "react"
// import { CartContext } from "../../context/CartContext"
// import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
// import { db } from "../../services"



// const Checkout = () => {
//     const [loading, setLoading] = useState(false)

//     const { cart, total, clearCart } = useContext(CartContext)

//     const createOrder = async () => {
//         setLoading(true)
//         try {
//             const objOrder = {
//                 buyer: {
//                     name: 'Sebastian Zuviria',
//                     phone: '123456789',
//                     email: 'contact@sebaz.io'
//                 },
//                 items: cart,
//                 total
//             }
    
//             console.log(objOrder)
    
//             const ids = cart.map(prod => prod.id)
//             const productsRef = collection(db, 'products')
    
//             const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
//             const { docs } = productsAddedFromFirestore
    
//             const batch = writeBatch(db)
//             const outOfStock = []
    
//             docs.forEach(doc => {
//                 const dataDoc = doc.data()
//                 const stockDb = dataDoc.stock
    
//                 const productAddedToCart = cart.find(prod => prod.id === doc.id)
//                 const prodQuantity = productAddedToCart?.quantity
    
//                 if(stockDb >= prodQuantity) {
//                     batch.update(doc.ref, { stock: stockDb - prodQuantity })
//                 } else {
//                     outOfStock.push({ id: doc.id, ...dataDoc})
//                 }
//             })
    
//             if(outOfStock.length === 0) {
//                 await batch.commit()
    
//                 const orderRef = collection(db, 'orders')
//                 const orderAdded = await addDoc(orderRef, objOrder)
    
//                 console.log(`El id de su orden es: ${orderAdded.id}`)
//                 clearCart()
//             } else {
//                 console.log('Hay productos fuera de stock')
//             }
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     if(loading) {
//         return <h1>Su orden se esta generando...</h1>
//     }

//     return (
//         <>
//             <h1>Checkout</h1>
//             <input className="controls" type="text" name="name"   placeholder="Ingrese su Nombre"/>
//     <input className="controls" type="text" name="surname" placeholder="Ingrese su Apellido"/>
//     <input className="controls" type="text" name="phone"  placeholder="Ingrese su Télefono"/>
//     <input className="controls" type="email" name="email"  placeholder="Ingrese su Correo"/>
//             <button onClick={createOrder}>Agregar documento</button>
            
//         </>
//     )
// }

// export default Checkout


// import { useState, useContext } from "react"
// import { CartContext } from "../../context/CartContext"
// import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
// import { db } from "../../services"

// const Checkout = () => {
//     const [loading, setLoading] = useState(false)

//     const { cart, total, clearCart } = useContext(CartContext)

//     const createOrder = async () => {
//         setLoading(true)
//         try {
//             const objOrder = {
//                 buyer: {
//                     name: 'Sebastian Zuviria',
//                     phone: '123456789',
//                     email: 'contact@sebaz.io'
//                 },
//                 items: cart,
//                 total
//             }
    
//             console.log(objOrder)
    
//             const ids = cart.map(prod => prod.id)
//             const productsRef = collection(db, 'products')
    
//             const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
//             const { docs } = productsAddedFromFirestore
    
//             const batch = writeBatch(db)
//             const outOfStock = []
    
//             docs.forEach(doc => {
//                 const dataDoc = doc.data()
//                 const stockDb = dataDoc.stock
    
//                 const productAddedToCart = cart.find(prod => prod.id === doc.id)
//                 const prodQuantity = productAddedToCart?.quantity
    
//                 if(stockDb >= prodQuantity) {
//                     batch.update(doc.ref, { stock: stockDb - prodQuantity })
//                 } else {
//                     outOfStock.push({ id: doc.id, ...dataDoc})
//                 }
//             })
    
//             if(outOfStock.length === 0) {
//                 await batch.commit()
    
//                 const orderRef = collection(db, 'orders')
//                 const orderAdded = await addDoc(orderRef, objOrder)
    
//                 console.log(`El id de su orden es: ${orderAdded.id}`)
//                 clearCart()
//             } else {
//                 console.log('Hay productos fuera de stock')
//             }
//         } catch (error) {
//             console.log(error)
//         } finally {
//             setLoading(false)
//         }
//     }

//     if(loading) {
//         return <h1>Su orden se esta generando...</h1>
//     }

//     return (
//         <>
//             <h1>Checkout</h1>
//             <button onClick={createOrder}>Agregar documento</button>
            
//         </>
//     )
// }

// export default Checkout


// import React from 'react'
// import { useContext } from 'react'
// import { CartContext } from '../../context/CartContext'
// import { useForm } from 'Form'

// export const Form = ({createOrder}) => {
    
//     const {name,surname,phone,email,onInputChange,onResetForm}=useForm({
//         name:'',
//         surname:'',
//         phone:'',
//         email:''
//     })
    
//     const {cart} = useContext(CartContext)

//     const handleSubmit = (event)=>{
//         event.preventDefault();

//         if(name === '' || email === '' || phone === ''){
//             //alertWarning('Porfavor llenar todos los campos');
//             return;
//         }
//         if(cart.length === 0){
//            //alertWarning('No hay productos agregados al carrito');
//             return;
//         }

//         const buyer = {
//             name,
//             surname,
//             email,
//             phone
//         }
//         createOrder(buyer);
//         onResetForm()
//     }

//   return (


//     <form className="form-register" onSubmit={handleSubmit}>
//     <h4>Checkout</h4>
//     <input className="controls" type="text" name="name" value={name} onChange={onInputChange} placeholder="Ingrese su Nombre"/>
//     <input className="controls" type="text" name="surname" value={surname} onChange={onInputChange} placeholder="Ingrese su Apellido"/>
//     <input className="controls" type="text" name="phone" value={phone} onChange={onInputChange} placeholder="Ingrese su Télefono"/>
//     <input className="controls" type="email" name="email" value={email} onChange={onInputChange} placeholder="Ingrese su Correo"/>
//     <button className="botons" type='submit'>Finalizar Compra</button>
//     </form >

//   )
// }
// export default Checkout



import { useState, useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { getDocs, addDoc, collection, doc, updateDoc, where, query, documentId, writeBatch } from 'firebase/firestore'
import { db } from "../../services";

import { Form } from '../Form/Form';

const Checkout = () => {
    const [loading, setLoading] = useState(false)

    const { cart, total, clearCart } = useContext(CartContext)

    const createOrder = async (buyer) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer,
                items: cart,
                total
            }
    
            console.log(objOrder)
    
            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')
    
            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in' , ids)))
            const { docs } = productsAddedFromFirestore
    
            const batch = writeBatch(db)
            const outOfStock = []
    
            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stock
    
                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity
    
                if(stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
    
            if(outOfStock.length === 0) {
                await batch.commit()
    
                const orderRef = collection(db, 'orders')
                const orderAdded = await addDoc(orderRef, objOrder)
    
                console.log(`El id de su orden es: ${orderAdded.id}`)
                clearCart()
            } else {
                console.log('Hay productos fuera de stock')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }

    if(loading) {
        return <h1>Su orden se esta generando...</h1>
    }
    
    return (
        <>
            <h1>Checkout</h1>
            
            <Form createOrder={createOrder}/>
            
            
        </>
    )
}


export default Checkout