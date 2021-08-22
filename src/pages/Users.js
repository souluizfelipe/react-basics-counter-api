import userEvent from '@testing-library/user-event'
import React, { useEffect, useState } from 'react'

import Loading from '../components/Loading'

const Users = () => {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ users, setUsers ] = useState([])

  useEffect(() => {
    setIsLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data =>{
        setUsers(data)
        setIsLoading(false)
      })  
  }, [])

  return(
    <>
      <Loading isLoading={isLoading}/>
      <ul>
        {
          users.map((user) => {
            return(
              <li>{user.name} - {user.email}</li>
            )
          })
        }
      </ul>
    </>
  )
}

export default Users