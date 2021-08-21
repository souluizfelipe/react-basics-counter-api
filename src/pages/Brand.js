import React, { useEffect, useState } from 'react';

import Loading from '../components/Loading'

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