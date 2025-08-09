import './App.css'
import Libros from './assets/components/Libros/Libros'
import Personajes from './assets/components/Personajes/Personajes'
import Hechizos from './assets/components/Hechizos/Hechizos'
import Navbar from './assets/Navbar/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './assets/components/Home/Home'
import Resultados from './assets/components/Resultados'
import { SearchProvider } from './assets/components/Context/CartContext'
import Footer from './assets/components/Footer/Footer'

function App() {
 
  return (
    <>
    <SearchProvider>
    <Router>
      {/* <Navbar/> */}
      <Routes>
      <Route exact path= "/" element={<Home/>}/>
        <Route exact path= "/personajes" element={<Personajes/>}/>
        <Route exact path= "/libros" element={<Libros/>}/>
        <Route exact path= "/hechizos" element={<Hechizos/>}/>
        <Route exact path = "/resultados" element ={<Resultados/>}/>
      </Routes>
      <Footer/>
    </Router>
    </SearchProvider>
    
    
  
    </>
  )
}

export default App
