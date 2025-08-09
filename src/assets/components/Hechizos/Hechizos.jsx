import { useEffect, useState } from 'react'
import HechizosDetail from './HechizosDetail';
import { FaMagic } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hechizos = () => {
    const [harryPotter, setHarryPotter] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [id,setId] = useState(1)
    const [loadingDirection, setLoadingDirection] = useState(null) // 'anterior' o 'siguiente'

  const handleIdChange = (newId, direction) => {
    setLoadingDirection(direction)
    setId(newId)
  }

  useEffect(() => {
    setLoading(true)
    setError(null)

    fetch(`https://harry-potter-api.onrender.com/hechizos/${id}`)
      .then((resp) => {
        if (!resp.ok) {
          throw new Error('Error al cargar el hechizo')
        }
        return resp.json()
      })
      .then((data) => {
        setHarryPotter(data);
        setLoading(false)
        setLoadingDirection(null) // Limpiar la dirección cuando termina
        console.log(data);
      })
      .catch((e) => {
        console.log(e);
        setError('Error al cargar el hechizo')
        setLoading(false)
        setLoadingDirection(null) // Limpiar la dirección en caso de error
      });
  }, [id]);

  if(error){
    return(
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-yellow-900 to-slate-900 flex items-center justify-center p-4'>
        <div className='text-center'>
          <FaMagic className='text-4xl sm:text-6xl text-red-400 mx-auto mb-4'/>
          <p className='text-lg sm:text-2xl text-red-400 font-merriweather'>Error: {error}</p>
          <Link className='text-lg sm:text-2xl text-red-400 font-merriweather underline' to={"/"}>Volver al Home</Link>
        </div>
      </div>
    )
  }
 
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-900 '>
      <div  className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
            style={{backgroundImage: "url('https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/Hogwarts-Castle.jpg')"}}>
      </div>
      <div className='relative z-10'>
        <div className="text-center py-6 sm:py-8 px-4">
         <h1 className="font-crimson text-3xl sm:text-4xl md:5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">Hechizos: 
         </h1>
         <p className="font-merriweather text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">Descubre el poder de la magia</p>
        </div>

        {/* Contenido principal */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          {harryPotter && <HechizosDetail 
            harryPotter={harryPotter} 
            id={id} 
            setId={handleIdChange} 
            loading={loading}
            loadingDirection={loadingDirection}
          />}
        </div>
      </div>
    </div>
  )
}

export default Hechizos