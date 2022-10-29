import './Cartwidget.css'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'
// import Cart from '../Assets/cart.svg'
const CartWidget = () => { 
    const { getTotalQuantity } = useContext(CartContext)

    const totalQuantity = getTotalQuantity()

    return(
        <Link to='/Cart.css' className="CartWidget">
            <img src={'https://play-lh.googleusercontent.com/2QEKcIOLIO9HRoL6lWIVFEY_Y07oW1_5Zk0vvEHym1Wsxzhdjf0mJ6eMG8QBs66c0S8=w240-h480-rw'} alt='cart.img' className='Cartimg'/>
            {totalQuantity}
        </Link>
    );
}

export default CartWidget