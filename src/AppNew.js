import React, {useState} from 'react'

import Albums from './Albums'
import Counter from './Counter'
import Users from './Users'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: "Albums",
    component: Albums,
  },
  counter: {
    text: "counter",
    component: Counter,
  },
  users: {
    text: "users",
    component: Users,
  },
}

const App_ = () => {

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

export default App_