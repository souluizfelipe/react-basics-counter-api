import React, {useState} from 'react'

import Template from './Template'
import Brand from './Brand'
import Counter from './Counter'
import Products from './Products'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: "Brand",
    component: Brand,
  },
  counter: {
    text: "Counter",
    component: Counter,
  },
  products: {
    text: "Products",
    component: Products,
  },
}

const AppNew = () => {

  const [ page, setPages ] = useState(defaultPage)

  const handlePageChange = (page) => {
    setPages(page)
  }

  const Page = pages[page].component

  return (
    <Template pages={pages} onPageChange={handlePageChange} activePage={page} >
      {Page && <Page />}
    </Template>
  )
}

export default AppNew