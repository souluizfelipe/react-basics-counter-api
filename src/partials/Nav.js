import React from 'react'

const Nav = ({ pages, onPageChange }) => {

  const pageList = Object.keys(pages)

  return (
    <>
      {
        pageList.map((page) => 
          <button onClick={() => onPageChange(page)} >{pages[page].text}</button>
        )
      }
    </>
  )
}

export default Nav