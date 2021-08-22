import React, { useEffect, useState } from 'react';

import Loading from '../components/Loading'

const Albums = () => {

  const [ isLoading, setIsLoading ] = useState(false)
  const [ albums, setAlbums ] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/albums')
      .then(res => res.json())
      .then(data => {
        setAlbums(data)
        setIsLoading(false)
      })
    }, [])
    
    return(
      <>
      <Loading isLoading={isLoading} />
      <ul>
        { 
          albums.map((album) => {
            return (
              <li>{album.title}</li>
            )
          })
        }
      </ul>
    </>
  );
};

export default Albums;