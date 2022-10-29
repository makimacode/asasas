import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { saveOrder } from '../helpers/getFetch'
import { alertConfirm } from '../helpers/sweetAlert';
import { Form } from '../Form/Form';



export const Checkout = () => {

    const {cart,totalCart,clearCart} = useContext(CartContext);

    const createOrder = async (buyer) => {
      const orderObj = {
        buyer,
        items: cart,
        total: totalCart
        }
        const resp = await saveOrder(cart,orderObj,clearCart)
        if(resp) alertConfirm('La compra fue realizada con exitó');
  
    }

    return(
      <div>
        <Form createOrder={createOrder}/>
      </div>
    )
}
export default Checkout