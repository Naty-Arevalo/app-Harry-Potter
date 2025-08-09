import  { useContext, useEffect, useState } from "react";
import Resultados from "./Resultados";
import { Link } from "react-router-dom";
import { SearchContext } from "./Context/CartContext";
import { FaSearch, FaHatWizard, FaMagic, FaBook } from "react-icons/fa";


const Serch = () => {
  const [q, setQ] = useState("");
  const [personajes, setPersonajes] = useState([]);
  const [libros, setLibros] = useState([]);
  const [hechizos, setHechizos] = useState([]);
  const {setResults} = useContext(SearchContext)

  useEffect(() => {
    fetch("https://harry-potter-api.onrender.com/personajes")
      .then((res) => res.json())
      .then((data) => setPersonajes(data));

    fetch("https://harry-potter-api.onrender.com/hechizos")
      .then((res) => res.json())
      .then((data) => setHechizos(data));

    fetch("https://harry-potter-api.onrender.com/libros")
      .then((res) => res.json())
      .then((data) => setLibros(data));

  }, []);

    const searchCharacters = ()=>{
        const searchQuery = q.toLowerCase()

    const filteredPersonajes = personajes.filter((personaje)=>{
        const nombre = personaje.personaje ? personaje.personaje.toLowerCase() : "";
        return nombre.includes(searchQuery)
    })
    const filteredHechizos = hechizos.filter((hechizo)=>{
        const nombre = hechizo.hechizo ? hechizo.hechizo.toLowerCase() : "";
        return nombre.includes(searchQuery)
    })

    const filteredLibros = libros.filter((libro)=>{
        const titulo = libro.libro ? libro.libro.toLowerCase() : "";
        return titulo.includes(searchQuery)
    })
    
    setResults({
        personajes: filteredPersonajes,
        libros: filteredLibros,
        hechizos: filteredHechizos
    })
    


}

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="text-center mb-6">
        <h2 className="font-merriweather text-3xl md:text-4xl font-bold text-white mb-3 ">Buscador Mágico</h2>
        <p className="font-crimson text-xl text-gray-300 mb-3">Encuenta personajes, hechizos y libros del mundo magico</p>

         {/* Iconos temáticos */}
         <div className="flex justify-center gap-6 mb-6">
          <div className="flex items-center gap-2 text-purple-300">
            <FaHatWizard className="text-2xl"/>
            <span className="font-open text-sm ">Personajes</span>
          </div>
          <div className="flex items-center gap-2 text-yellow-300">
            <FaMagic className="text-2xl"/>
            <span className="font-open text-sm">Hechizos</span>
          </div>
          <div className="flex items-center gap-2 text-blue-300">
            <FaBook className="text-2xl"/>
            <span className="font-open text-sm">Libros</span>
          </div>
         </div>
      </div>
      <div className="flex flex-col md:flex-row gap-3 items-center justify-center">
        <div className="relative flex-1 max-w-md">
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text.xl"/>
          <input 
            type="text" 
            className=" w-full pl-10 pr-4 py-3 text-base bg-white/10 backdrop-blur-sm border-2 border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-300 focus:outline-none transition-all duration-300 "
            value={q}
            onChange={(e)=> setQ(e.target.value)}
            placeholder="Buscar personajes, hechizos, ibros"
            onKeyDown={(e)=>e.key === 'Enter' && searchCharacters()}
            />
        </div>
        <Link
        className="font-open group flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-600 to purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-bold- textl-xl rounded-xl border-2 border-purple-400/30 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover: shadow purple-500/25"
        onClick={searchCharacters}
        to={"/resultados"}
        >
          <FaSearch className="text-lg group-hover:animate-pulse"/>
          Buscar
        </Link>

      </div>
    </div>
)};

export default Serch;
