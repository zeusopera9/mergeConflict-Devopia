import React from 'react'
import Welcome from '../components/Landing/Welcome'
import Header from '../components/Landing/Header'


const LandingPage = () => {
  return (
    <>
      <Header />
      <div>
        This is the Landing Page
        <Welcome />
      </div>
    </>
  )
}

export default LandingPage
