import React from 'react'

import Header from './Header'
import Nav from './Nav'

const Template = ({ children, pages, onPageChange, activePage }) => {
  const title = pages[activePage].text

  return (
    <>
      <Header title={title} />
      <Nav pages={pages} onPageChange={onPageChange} />
      {children}
    </>
  )
}

export default Template