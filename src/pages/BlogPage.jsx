import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import BlogContent from '../components/BlogContent'

// eslint-disable-next-line react/prop-types
const BlogPage = ({ blogs }) => {
  return (
    <div>
      <NavBar />
      <BlogContent blogs={blogs ? blogs : ''} />
      <Footer />
    </div>
  )
}

export default BlogPage
