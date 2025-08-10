import ButtonBack from "../ButtonBack"
import {usePagination} from '../../../Hooks/usePagination'
import { FaCrown, FaHatWizard } from "react-icons/fa"

const PersonajesDetail = ( { personajes }) => {
  const {currentItems, currentPage, totalPages, goToPage, hasNextPage, hasPrevPage} = usePagination(personajes, 8)
    
  return (<>
  <div className="relative z-10">
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 mb-4 sm:mb-8 gap-4 ">
      <ButtonBack/>
      <h1 className="font-crimson text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center order-2 sm:order-1 flex-1   ">Personajes:
      </h1>
    </div>
  </div>
  
    {personajes.length > 1 ? (
      <>
        <div className='grid gap-4 sm:gap-6 grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 sm:p-6'>
            {currentItems.map((persona) =>(
                <div className="group bg-gradient-to-br from-purple-800/20 to-purple-600/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-purple-400/30 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 overflow-hidden" key={persona.id} >
                  <div className="relative overflow-hidden h-48 sm:h-48 md:h-80">
                    {persona.imagen ? (
                      <img 
                        className='w-full h-full object-contain group-hover:scale-110 transition-transform duration-300'
                        src={persona.imagen} 
                        alt={persona.personaje || 'Personaje'}
                        onError={(e)=>{
                          e.target.style.display = 'none'
                          e.target.nextSibling.style.display = 'flex'
                        }} 
                      />
                    ) : null}
                    <div 
                      className={`w-full h-48 sm:h-64 md:h-80 bg-purple-800/20 flex items-center justify-center ${persona.imagen ? 'hidden' : 'flex'}`}
                      style={{display: persona.imagen ? 'none' : 'flex'}}
                    >
                      <div className="text-center">
                        <FaHatWizard className="text-4xl text-purple-400 mx-auto mb-2"/>
                        <p className="text-purple-300 text-sm font-merriweather">{persona.personaje || 'Personaje'}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                   {/* Información del personaje */}
                  <div className="p-3 sm:p-4 md:p-6">
                    <h2 className="font-merriweather text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 group-hover:text-purple-200 transition-colors duration-300 line-clamp-2">{persona.personaje}
                    </h2>
                  <div className="flex items-center gap-2 mb-2 sm:mb-3">
                    <FaCrown className="text-yellow-400 text-sm sm:text-lg flex-shrink-0"/>
                    <p className="font-crimson text-sm sm:text-base text-gray-300">
                      Casa: <span className="text-purple-300 font-semibold">{persona.casaDeHogwarts || 'Sin especificar'}</span>
                    </p>
                  </div>
                  {persona.apodo &&(
                    <div>
                      <FaHatWizard className="text-purple-400 text-sm sm:text-lg flex-shrink-0"/>
                      <p className="font-crimson text-xs sm:text-sm text-gray-400">
                        Apodo: <span className="text-gray-300 font-medium line-clamp-1">{persona.apodo}</span>
                      </p> 
                    </div>
                  )}                    
                </div>
                  </div>
            ))}
        </div>

         {/* Paginación*/}
        <div className="flex justify-center mt-6 sm:mt-8 mb-6 sm:mb-8 px-4">
          <div className="flex justify-center items-center gap-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={!hasPrevPage}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Anterior
            </button>
            {[...Array(totalPages)].map((__, i) => (
              <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-2 rounded transition-colors ${
                  currentPage === i + 1 ? 'bg-purple-600 text-white' : 'bg-purple-200 hover:bg-purple-300 text-purple-800'
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={!hasNextPage}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Siguiente
            </button>
          </div>
        </div>
      </>
    ) : (
      <div className="text-center py-8 sm:py-12 px-4">
        <FaHatWizard className="text-4xl sm:text-6xl text-purple-400 mx-auto mb-4 animate-pulse"/>
         <p className="text-lg sm:text-2xl text-white font-merriweather">Cargando Personajes...</p>
      </div> 
    )}
  </>)
}

export default PersonajesDetail