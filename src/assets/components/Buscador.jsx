import { useCallback } from 'react'
import { useSearch } from '../../Hooks/useSearch'
import { FaHatWizard, FaSearch } from 'react-icons/fa'


const Buscador = () => {
    // Función de búsqueda que se pasa al hook
    const searchCharacters =useCallback( async (searchTerm) => {
        const res = await fetch("https://harry-potter-api.onrender.com/personajes")
        const data = await res.json()

        const filteredResults = data.filter(character => {
            const nombre = character.apodo?.toLowerCase() || '';
            const personaje = character.personaje?.toLowerCase() || ''
            const term = searchTerm.toLowerCase()
            
            return nombre.includes(term) || personaje.includes(term)
        })
        
        return filteredResults
    },[])

   
    const { query, setQuery, results, loading } = useSearch(searchCharacters, 300);

    return (
        <div className='w.full max-4xl mx-auto p-3 sm:p-4 md:p-6'>
            <div className='text-center mb-4 sm:mb-6'>
                <h2 className='font-crimson text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4'>Buscador Por Personajes:</h2>
                <p className='font-crimson text-sm sm:text-base md:text-lg text-gray-300 mb-4 sm:mb-6 px-2'>Encuentra personajes por nombre o apodo</p>
            </div>

            <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center mb-6 sm:mb-8'>
                <div className='relative flex-1 max-w-sm sm:max-w-md w-ful'>
                    <FaSearch className='absolute left-3 sm:left-4 top-1/2 top-1/2 transoform -translate-y-1/2 text-gray-400 text-lg sm:text-xl'/>
                    <input 
                    className='w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 text-base sm_text-lg bg-white/10 backdrop-blur-sm border-2 border-purple-400/30 rounded-xl text-white placeholder-gray-400 focus:border-purple-300 focus:outline-none transition-all duration-300' 
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder='Nombre de Personaje'
                    />      
                </div> 
                
                {loading && (
                    <div className='flex items-center gap-2 text-purple-400 text-sm sm:text-base'>
                        <FaHatWizard className='animate-spin'/>
                        <span >Buscando...</span>
                    </div>
                )}
            </div>      
            {/*Resultados de Busqueda*/}
            {results.length > 0 && (
                <div className='mt-6 sm:mt-8'>
                    <h3 className='font-merrweather text-xl sm:text-2xl text-white mb-3 sm:mb-4 text-center'>Resultados de busqueda({results.length})</h3>
                    <div className='grip gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
                        {results.map((character) => (
                            <div key={character.id} className='bg-gradient-to-br from-purple-800/20 to-purple-600/20 backdrop-blur-sm border-purple-400/30 rounded-xl p-3 sm_p-4 hover:border-purple-300 transition-all duration-300'>
                                <h4 className='font-merriweather text-base sm:text-lg font-bold text-white mb-2'>{character.personaje}</h4>
                                <p className='font-crimson text-sm text-gray-300 mb-1'>{character.casaDeHogwarts || 'sin especificafr'}</p>
                                {character.apodo && (
                                    <p className='font-crimson text-xs sm:text-sm text-gray-400'>Apodo: {character.apodo}</p>
                                )}                           
                            </div>
                        ))}
                    </div>
                </div>
            )}
            {query && results.length === 0 && !loading &&(
                <div className='text-center text-gray-400 mt-6 sm:mt-8'>
                    <FaHatWizard className='text-3xl sm:text-4xl mx-auto mb-3 sm:mb-4'/>
                    <p className='font-crimson text-sm sm:text-base'>No se encontraron personajes con ese nombre</p>
                </div>
            )}
        </div>
    )
}

export default Buscador