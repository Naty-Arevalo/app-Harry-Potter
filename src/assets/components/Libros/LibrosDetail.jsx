
import ButtonBack from '../ButtonBack'
import { usePagination } from '../../../Hooks/usePagination'
import { FaBook, FaCalendarAlt } from 'react-icons/fa'

const LibrosDetail = ( { libros, tapa }) => {
    const {currentItems, currentPage, totalPages, goToPage, hasNextPage, hasPrevPage} = usePagination(libros, 3)

  return (
    <>
        <div className='relative z-10'>
            <div className='flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 mb-4 sm:mb-8 gap-4 max-w-7xl mx-auto w-full'>
                <ButtonBack/>
                <h1 className='font-crimson text-3xl sm:text-4xl md:text-5xl font-bold text-white text-center order-2 sm:order-1 flex-1'>
                Libros:
                </h1>
            </div>
        </div>

        {libros.length > 1 ? (
            <>
            <div className='grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-4 sm:p-6 max-w-7xl mx-auto w-full'>
                {currentItems.map((libro)=>{
                    const tapaCorrespondiente = tapa && tapa.length > 0 ? tapa.find(t => t.id === libro.id) : null
                    return(
                        <div className='group bg-gradient-to-br from-blue-800/20 to-blue-600/20 backdrop-blur-sm rounded-xl sm:rounded-2xl border-2 border-blue-400/30 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 overflow-hidden h-full flex flex-col' key={libro.id}> 
                            <div className='relative overflow-hidden flex-shrink-0'>
                                {tapaCorrespondiente && tapaCorrespondiente.img ? (
                                    <img 
                                        className='w-full h-64 sm:h-72 bg-blue-900/20 object-contain group-hover:scale-105 transition-transform duration-300'
                                        src={tapaCorrespondiente.img}
                                        alt={`Tapa del libro ${libro.libro}`}
                                        onError={(e)=> {
                                            e.target.style.display = 'none'
                                            e.target.nextSibling.style.display = 'flex'
                                        }}
                                    />
                                ) : null}
                                <div 
                                    className={`w-full h-64 sm:h-72 bg-blue-800/20 flex items-center justify-center ${tapaCorrespondiente && tapaCorrespondiente.img ? 'hidden' : 'flex'}`}
                                    style={{display: (tapaCorrespondiente && tapaCorrespondiente.img) ? 'none' : 'flex'}}
                                >
                                    <div className="text-center">
                                        <FaBook className="text-6xl text-blue-400 mx-auto mb-2"/>
                                        <p className="text-blue-300 text-sm font-merriweather">{libro.libro || 'Libro'}</p>
                                    </div>
                                </div>
                                <div className='absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                            {/*Info del libro*/}
                            <div className='p-4 sm:p-6 flex-1 flex flex-col'>
                                <h2 className='font-merriweather text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-blue-200 transition-colors duration-300'>
                                    {libro.libro}
                                </h2>

                                <div className='flex items-center gap-2 mb-3'>
                                    <FaCalendarAlt className='text-blue-400 text-sm sm:text-lg flex-shrink-0'/>
                                    <p className='font-crimson text-sm sm:text-base text-gray-300'>
                                        Fecha: <span className='text-blue-300 font-semibold'>{libro.fecha_de_lanzamiento}</span>
                                    </p>
                                </div>

                                {libro.descripcion && (
                                    <div className='flex-1'>
                                        <div className='flex items-start gap-2 mb-2'>
                                            <FaBook className='text-blue-400 text-sm sm:text-base flex-shrink-0 mt-1'/>
                                            <p className='font-crimson text-sm sm:text-base text-gray-300 leading-relaxed'>
                                                {libro.descripcion}
                                            </p> 
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
            {/*Paginacion*/}
            <div className='flex justify-center mt-8 sm:mt-12 mb-6 sm:mb-8 px-4'>
                <div className='flex justify-center items-center gap-2'>
                    <button
                        onClick={() => goToPage(currentPage - 1)}
                        disabled={!hasPrevPage}
                        className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                    >
                        Anterior
                    </button>
                    {[...Array(totalPages)].map((__, i) => (
                        <button
                            key={i + 1}
                            onClick={() => goToPage(i + 1)}
                            className={`px-3 py-2 rounded transition-colors ${
                                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-blue-200 hover:bg-blue-300 text-blue-800'
                            }`}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        onClick={() => goToPage(currentPage + 1)}
                        disabled={!hasNextPage}
                        className='px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
                    >
                        Siguiente
                    </button>
                </div>
            </div>
        </>
        ): (
            <div className='text-center py-8 sm:py-12 px-4'>
                <FaBook className='text-4xl sm:text-6xl text-blue-400 mx-auto mb-4 animate-pulse'/>
                <p className='text-lg sm:text-2xl text-white font-merriweather'>Cargando Libros...</p>
            </div>
        )}
    </>
  )
}

export default LibrosDetail
