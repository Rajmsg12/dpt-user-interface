import React from 'react'
import {Link} from 'react-router-dom'
import './Style/DetailPage.css'

const BreadCrum = () => {
  return (
    <div>
    <div className="BreadcrumbSection">
    <div className="container">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to="/">Dubai Tour</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">Abu Dhabi Amazing Family Private Tour</li>
        </ol>
      </nav>
    </div>
  </div>
    </div>
  )
}

export default BreadCrum
