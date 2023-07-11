import BlogPage from './pages/BlogPage'
import HomePage from './pages/HomePage'
import { Routes, Route } from 'react-router-dom'
import useFetch from './hooks/useFetch'

function App() {

  let {loading, data, error} = useFetch()

  if(loading) return <p>Carregando...</p>
  if (error) return <p>Erro ao carregar...</p>

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage blogs={data ? data : ''} />} />
        <Route path='/blog/:blogTitle' element={<BlogPage blogs={data ? data : ''} />} />
      </Routes>
    </>
  )
}


export default App
