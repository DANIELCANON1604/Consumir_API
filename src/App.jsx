import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Narvar from './components/narvar.jsx'
import Home from './pages/home.jsx'
import NotFound from './pages/notFound.jsx'
import Personajes from './pages/personajes.jsx'
import Episode from './pages/episode.jsx'
import Search from './components/search.jsx'


function App() {

  return (
    <BrowserRouter>
    <Narvar />
    <Search />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/*' element={<NotFound />}/>
        <Route path='/personajes' element={<Personajes />}/>
        <Route path='/episodios' element={<Episode />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
