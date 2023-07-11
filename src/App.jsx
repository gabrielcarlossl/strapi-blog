import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/blog/:blogTitle' element={<BlogPage />} />
      </Routes>
    </>
  )
}


export default App
