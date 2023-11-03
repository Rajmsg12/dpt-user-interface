import React from 'react'
import InnerHeader from '../common/InnerHeader'
import YouAlsoLike from '../TourPage/YouAlsoLike'
import Footer from '../common/Footer'
import Cart from '../cart/cart'

const cart = () => {
  return (
    <div>
      <InnerHeader/>
      <Cart/>
      <YouAlsoLike/>
      <Footer/>
    </div>
  )
}

export default cart
