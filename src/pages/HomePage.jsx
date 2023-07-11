import React from 'react'
import Blogs from '../components/Blogs'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

// eslint-disable-next-line react/prop-types
const HomePage = ({ blogs }) => {
  return (
    <div>
      <NavBar />
      <Blogs blogs={blogs ? blogs : ''} />
      <Footer />
    </div>
  )
}

export default HomePage
