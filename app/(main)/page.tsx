 
 
import PriceSection from '@/components/PriceSection'
import SubscriptionSection from '@/components/SubscriptionSection'
import Banner from '@/components/banner'
import Header from '@/components/header'
import React from 'react'

const Home = () => {
  return (
 <>
    <Header/>
   <Banner/>
   <PriceSection/>
   <SubscriptionSection/>
   </>
  )
}

export default Home