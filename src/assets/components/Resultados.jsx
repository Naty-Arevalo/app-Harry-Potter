import { useContext } from "react"
import { SearchContext } from "./Context/CartContext"
import ButtonBack from "./ButtonBack"
import { FaBook, FaHatWizard, FaMagic } from "react-icons/fa"



const Resultados = () => {
    const { results } = useContext(SearchContext)
   

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-800 to-green-600/20 p-6">
            <div className="max-w-6xl mx-auto">
                
                {/* Personajes */}
                {results.personajes.length > 0 && (
                    <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-300/30">
                        <h2 className="text-3xl font-bold text-purple-400 mb-4 flex items-center">
                            <span className="mr-2"><FaHatWizard/></span>
                            Personajes Encontrados
                        </h2>
                        <div className="grid gap-4">
                            {results.personajes.map((personaje) => (
                                <div key={personaje.id} className="bg-white/5 rounded-lg p-4 border-l-4 border-purple-400 hover:bg-white/10 transition-all">
                                    <div className="flex items-center justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {personaje.personaje}
                                            </h3>
                                            {personaje.casaDeHogwarts && (
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    <span className="text-purple-300 font-medium">Casa:</span> Casa: {personaje.casaDeHogwarts}
                                                </p>
                                            )}
                                        </div>
                                        
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Libros */}
                {results.libros.length > 0 && (
                    <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-300/30">
                        <h2 className="text-3xl font-bold text-blue-400 mb-4 flex items-center">
                            <span className="mr-2"><FaBook/></span>
                            Libros Encontrados
                        </h2>
                        <div className="grid gap-4">
                            {results.libros.map((libro) => (
                                <div key={libro.id} className="bg-white/5 rounded-lg p-4 border-l-4 border-blue-400 hover:bg-white/10 transition-all">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {libro.libro}
                                            </h3>
                                            {libro.titulo_original && (
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    {libro.titulo_original}
                                                </p>
                                            )}
                                            <p className="text-sm text-gray-300 leading-relaxed">({libro.fecha_de_lanzamiento})</p>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Hechizos */}
                {results.hechizos.length > 0 && (
                    <div className="mb-8 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-green-300/30">
                        <h2 className="text-3xl font-bold text-yellow-400 mb-4 flex items-center">
                            <span className="mr-2"><FaMagic/></span>
                            Hechizos Encontrados
                        </h2>
                        <div className="grid gap-4">
                            {results.hechizos.map((hechizo) => (
                                <div key={hechizo.id} className="bg-white/5 rounded-lg p-4 border-l-4 border-yellow-400 hover:bg-white/10 transition-all">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="text-xl font-semibold text-white mb-2">
                                                {hechizo.hechizo}
                                            </h3>
                                            {hechizo.uso && (
                                                <p className="text-gray-300 text-sm leading-relaxed">
                                                    <span className="text-yellow-300 font-medium">Uso:</span> {hechizo.uso}
                                                </p>
                                            )}
                                        </div>
                                      
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Mensaje cuando no hay resultados */}
                {results.personajes.length === 0 && results.libros.length === 0 && results.hechizos.length === 0 && (
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">🔍</div>
                        <h2 className="text-2xl font-bold text-white mb-2">No se encontraron resultados</h2>
                        <p className="text-gray-300">Intenta con otros términos de búsqueda</p>
                    </div>
                )}
            </div>

            <div className="mt-8 text-center">
                <ButtonBack />
            </div>
        </div>
    )
}

// const Resultados = () => {

//     const {results} = useContext(SearchContext)
    
//   return (<>
//   <div className="min-h-screen bg-gradient-to-br from-green-900  to-green-700">
//   <div className="">
//         {results.personajes.length > 0 && (
//             <div >
//                 <h2 className="text-4xl">Personaje</h2>
//                 {results.personajes.map((personaje) =>(
//                     <div key={personaje.id} className="flex justify-around">
//                         <ul>
//                             <li>{personaje.personaje}</li>
//                         </ul>
//                         {/* <p>{personaje.casaDeHogwarts}</p> */}
                        
//                     </div>
//                 ))}
//             </div>
//         )}
//         {results.libros.length >0 && (
//             <div>
//                 <h2>Libro</h2>
//                 {results.libros.map((libro) => (
//                     <div key={libro.id}>
//                         <h2>{libro.libro}</h2>
//                         <p>{libro.descripcion}</p>
//                     </div>
//                 ))}
//             </div>
//         )}
//         {results.hechizos.length > 0 && (
//             <div>
//                 <h2>Hechizo</h2>
//                 {results.hechizos.map((hechizo) =>(
//                 <div key={hechizo.id}>
//                     <h2>{hechizo.hechizo}</h2>
//                     <p>{hechizo.uso}</p>
//                 </div>
//             ))}
//             </div>
            
//         )}
//     </div>
//     <div>
//        <ButtonBack/>
//     </div>
//   </div>
    
//     </>)
// }

export default Resultados