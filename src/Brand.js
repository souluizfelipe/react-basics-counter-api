import React, { useEffect, useState } from 'react';

const Brand = () => {

  const [ brands, setBrands ] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then(data => {
        setBrands(data)
      })
    }, [])
    
    return(
      <>
      <h1>Brands</h1>
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