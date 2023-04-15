import React, { useEffect,useState } from 'react'
import axios from 'axios'

function Products() {
    const [products, setProducts] = useState([])
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => {
                setProducts(data.products)
                setIsLoading(false)
            })
            .catch(e => console.log(e))
            .finally(() => setIsLoading(false))

        axios('https://dummyjson.com/users')
            .then(res => {
                setUsers(res.data.users)
            })
            
    }, [])

  return (
    
    <div>
        <h1>Products</h1>
        <hr></hr>
        {isLoading ? <h3>Loading...</h3> : null}
        {products.map((product,idx) => {
            return (
                <div key={idx}>
                    <h3>{product.name}</h3>
                    <h4>{product.brand}</h4>
                    <p>{product.description}</p>
                    <p>{product.price}</p>
                    <p>{product.rating}</p>
                    <p>{product.category}</p>
                    <img src={product.images[1]} alt={product.name} />
                    
                    <hr></hr>
                </div>
                
            )
        })}    
    </div>
    

    )
       
}

export default Products