import React from 'react'
import HomeHero from './HomeHero/HomeHero'
import ProfessionalEquipments from './ProfessionalEquipments/ProfessionalEquipments'
import RecipeHome from './RecipeHome/RecipeHome'
import HomeReview from './HomeReview/HomeReview'
import HomeReady from './HomeReady/HomeReady'

const Home = () => {
  return (
    <div>
      <HomeHero />
      <ProfessionalEquipments />
      <RecipeHome />
      <HomeReview />
      <HomeReady />
    </div>
  )
}

export default Home