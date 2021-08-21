import React from 'react'

import './Loading.css'

const Loading = ( {isLoading} ) => {
  return (
    isLoading === true
    ? <div className="loading-page">
        <p>Loading</p>
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    : ''
  )
}

export default Loading