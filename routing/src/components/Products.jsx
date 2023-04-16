import {useEffect, useState} from 'react'
import Navigation from './Navigation'


function Products() {
  const [products, setProducts] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(json => setProducts(json))
  })
  return (
    <>
    <Navigation />
    <div>Products</div>
    

    </>)
}

export default Products