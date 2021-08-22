import React, {useState} from 'react'

import Template from './template/Template'
import Albums from './pages/Albums'
import Counter from './pages/Counter'
import Users from './pages/Users'

const defaultPage = 'albums'

const pages = {
  albums: {
    text: "Albums",
    component: Albums,
  },
  counter: {
    text: "Counter",
    component: Counter,
  },
  Users: {
    text: "Users",
    component: Users,
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