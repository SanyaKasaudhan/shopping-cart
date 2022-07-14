import React from 'react'
import  Announcement  from '../components/Announcement'
import Categories from '../components/Categories'
import CategoryItem from '../components/CategoryItem'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <>
    
    <Announcement />
      <Navbar />
      <Slider />
      <CategoryItem />
    </>
  )
}

export default Home