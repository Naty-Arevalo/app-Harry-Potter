import { useEffect, useState } from "react"
import { pedirDatos } from "../../Helpers/PedirDatos"
import { useApi } from "../../../Hooks/useApi"
import { FaBook } from "react-icons/fa"
import LibrosDetail from "./LibrosDetail"

const Libros = () => {

    const [tapa, setTapa] = useState([])

    const {data: libros, loading, error} = useApi('https://harry-potter-api.onrender.com/libros')

    useEffect(()=>{
        pedirDatos()
        .then((res) =>{
            setTapa(res)
        })
    },[])

    if (loading) return(
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            <div className="text-center">
                <FaBook className="text-4xl sm:text-6xl text-blue-400 animate-spin mx-auto mb-4"/>
                <p className="text-lg sm:text-2xl text-white font-merriweather">Cargando Libros...</p>
            </div>
        </div>
    )
    if(error) return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
            <div className="text-center">
                <FaBook className="text-4xl sm:text-6xl text-red-400 mx-auto mb-4"/>
                <p className="text-lg sm:text-2xl text-red-400 font-merriweather">Error: {error}</p>
            </div>
        </div>
    )
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{backgroundImage: "url('https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/Hogwarts-Castle.jpg')"}}>
        </div>
        
        <div className="relative z-10">
            <header className="text-center p-6 sm:py-8 px-4">
                <h1 className="font-crimson text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">Todos los Libros de la saga</h1>
            </header>
            
        </div>
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
            <LibrosDetail libros={libros || []} tapa={tapa}/>
        </div>
    </div>
  )
}

export default Libros