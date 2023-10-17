import React from 'react'
import InnerHeader from '../common/InnerHeader'
import BreadCrum from '../DetailPage/BreadCrum'
import TopSection from '../DetailPage/TopSection'
import ContentSection from '../DetailPage/ContentSection'
import Footer from '../common/Footer'
import Memories from '../common/memories'
import ReviewRatingSection from '../DetailPage/ReviewRatingSection'
import YouAlsoLike from '../DetailPage/YouAlsoLike'

const DetailSection = () => {
  return (
    <div>
      <InnerHeader/>
      <BreadCrum/>
      <TopSection/>
      <ContentSection/>
      <ReviewRatingSection/>
      <YouAlsoLike/>
      <Memories/>
      <Footer/>
      
    </div>
  )
}

export default DetailSection
