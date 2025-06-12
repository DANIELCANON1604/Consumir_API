import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Narvar from './components/narvar'
import Home from './pages/Home'
import NotFound from './pages/notFound'
import Personajes from './pages/Personajes'
import Episode from './pages/episode'
import Search from './components/search'


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
