import React, { useState } from 'react';

import Counter from './Counter';
import Albums from './Albums';
import Users from './Users';

const defaultPage = 'albums'

const pages = {
  albums :{
    text: "Albums",
    component: Albums,
  },
  counter :{
    text: "Counter",
    component: Counter,
  },
  user :{
    text: "Users",
    component: Users,
  },
};

function App () {

  const[ page, setPage ] = useState(defaultPage);

  const handlePageChange = page => {
    setPage(page);
  };

  const Page = pages[page].component;
  
  //create a array with the keys of every object inside pages
  const pagesList = Object.keys(pages);
  
  return(
    <div>
      {
        // use this array to access the items on pages 
        pagesList.map((page) => {
          // return a button with the same properties and functionalities for every item
          return(
            <button onClick={() => handlePageChange(page)} >{pages[page].text}</button>
          );
        })
      }

      <Page />
    </div>
  );
};

export default App;