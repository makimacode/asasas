import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import { useState, useEffect } from 'react'
import './NavBar.css'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/Cartwidget'
import { db } from '../../services'


const NavBar = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const collectionRef = query(collection(db, 'categories'), orderBy('order'))

    getDocs(collectionRef).then(response => {
      console.log(response)

      const categoriesAdapted = response.docs.map(doc => {
        const data = doc.data()
        return { id: doc.id, ...data}
      })

      setCategories(categoriesAdapted)
    })
  }, [])

  console.log(categories)

  return (
    <nav className="NavBar" >
        <Link to='/'>
          <h3>Nuestros productos</h3>   
        </Link>
        <div className="Categories">
        { categories.map(cat => (
                <NavLink key={cat.id} to={`/category/${cat.slug}`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>{cat.label}</NavLink>
            ))}
            <NavLink to='/category/Collares' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Collares</NavLink>
            <NavLink to='/category/Reloj' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Reloj</NavLink>
            <NavLink to='/category/Pulseras' className={({isActive}) => isActive ? 'ActiveOption' : 'Option'}>Pulseras</NavLink>
        </div>
        <CartWidget />
    </nav>
  )
  
}

export default NavBar