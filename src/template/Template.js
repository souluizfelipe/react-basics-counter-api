import React from 'react'

import Header from '../partials/Header'
import Nav from '../partials/Nav'

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