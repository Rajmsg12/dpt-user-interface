import React from 'react'
import TourListing from '../TourListing/listingSection'
import InnerHeader from '../common/InnerHeader'
import Footer from '../common/Footer'
import Memories from '../common/memories'
import Faq from '../homepage/Faq'
import YouAlsoLike from '../TourPage/YouAlsoLike'
import TrendingPlaces from '../homepage/TrendingPlaces'
import BreadCrum from '../TourListing/BreadCrum'
import TopListing from '../TourListing/TopListingDetail'

const TourListingMain = () => {
  return (
    <div>
    <InnerHeader/>
    <BreadCrum/>
    <TopListing/>
    <TourListing/>
    <TrendingPlaces/>
    <YouAlsoLike/>
    <Faq/>
    <Memories/>
    <Footer/>
    </div>
  )
}

export default TourListingMain
