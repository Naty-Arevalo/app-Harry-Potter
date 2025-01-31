import  { useContext, useEffect, useState } from "react";
import Resultados from "./Resultados";
import { Link } from "react-router-dom";
import { SearchContext } from "./Context/CartContext";


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

  return (<>
    <div>
        <h1 className="mt-7 text-5xl">Buscador General: </h1>
        <input
        className=" m-3 px-3 rounded-2xl border-gray-400 w-64 h-10 placeholder:italic text-3xl" 
        type="text"
        value={q}
        onChange={(e)=> setQ(e.target.value)}
        placeholder="Libros, Personajes, Hechizos.."
        />
        <Link className=' bg-rgb text-white border-2 rounded-2xl text-4xl px-1' onClick={searchCharacters} to={"/resultados"} element={<Resultados/>}>Buscar</Link>
    </div>
    
  </>
)};

export default Serch;
