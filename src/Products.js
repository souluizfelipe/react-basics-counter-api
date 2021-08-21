import React, { useEffect, useState } from 'react'

const Products = () => {

  const [ products, setProducts ] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data =>{
        setProducts(data)
      })  
  }, [] )
  

  return(
    <>
      <h1>Products</h1>
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