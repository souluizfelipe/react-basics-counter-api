import React, {useState} from 'react'

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

  const pageList = Object.keys(pages)

  return (
    <>
      {
        pageList.map((page) => 
          <button onClick={() => handlePageChange(page)} >{pages[page].text}</button>
        )
      }

      <Page />
    </>
  )
}

export default AppNew