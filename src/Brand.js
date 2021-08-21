import React, { useEffect, useState } from 'react';

import Loading from './Loading'

const Brand = () => {

  const [ loading, setLoading ] = useState(false)
  const [ brands, setBrands ] = useState([])

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => {
        setBrands(data)
        setLoading(false)
      })
    }, [])
    
    return(
      <>
      <h1>Brands</h1>
      {
        loading === true 
          ? <Loading />
          : ''
      }
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