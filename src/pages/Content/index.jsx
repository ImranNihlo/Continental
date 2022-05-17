import React from 'react'

import "./content.css"
import Cards from './Cards'
import Sidebar from './Sidebar'

function Content (props) {
  return (
    <>
      <h3 className="text-center text-secondary fst-italic mt-5 mb-5">
        Виды деятельности
      </h3>
      <div className="container">
        <div className="row justify-content-center px-5">
          <Cards />
          <Sidebar />
        </div>
      </div>
    </>
  )
}

export default Content