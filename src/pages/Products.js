import React, { useEffect, useState } from 'react'

import Loading from '../components/Loading'

const Products = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ products, setProducts ] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data =>{
        setProducts(data)
        setIsLoading(false)
      })  
  }, [])

  return(
    <>
      <Loading isLoading={isLoading}/>
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