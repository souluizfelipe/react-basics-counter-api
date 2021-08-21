import React, { useEffect, useState } from 'react'

import Loading from './Loading'

const Products = () => {
  const [loading, setLoading ] = useState(false)
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data =>{
        setProducts(data)
        setLoading(false)
      })  
  }, [] )
  

  return(
    <>
      <h1>Products</h1>
      <div>
        {
          loading === true 
            ? <Loading />
            : ''
        }
      </div>
      <ul>
        {
          products.map((product) => {
            return(
              <li>{product.name} - {product.brand} - {product.price} </li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Products