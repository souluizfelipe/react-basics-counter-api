import React, { useEffect, useState } from 'react';

import Header from './Header';
import Loading from './Loading'

const Brand = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ brands, setBrands ] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => {
        setBrands(data)
        setIsLoading(false)
      })
    }, [])
    
    return(
      <>
      <Header title="Brands" />
      <Loading isLoading={isLoading} />
      <ul>
        { 
          brands.map((name) => {
            return (
              <li>{name.brand}</li>
            )
          })
        }
      </ul>
    </>
  );
};

export default Brand;