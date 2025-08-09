
import { Link } from 'react-router-dom'
import Serch from '../Serch'
import { FaHatWizard, FaMagic , FaBook} from 'react-icons/fa'
import './home.css'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 magic-particles">

      {/* Fondo con imagen de Hogwarts */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
           style={{backgroundImage: "url('https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/Hogwarts-Castle.jpg')"}}>
      </div>

      <div className='relative z-10'>

        {/* Header con título y buscador general */}
        <header className='text-center py-4 px-4'>
            <h1 className='font-crimson text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-400 bg-clip-text text-transparent '>Mundo Magico</h1>
            <p className='font-merriweather text-lg md:text-2xl text-gray-300 '>Explora el universo Harry Potter</p>
      
        </header>
        <section className='flex flex-col lg:flex-row gap-6 justify-center items-start px-4 py-6 max-w-7xl mx-auto'>

         {/* Buscador General */}
            <div className='w-full lg:w-1/2 lg:sticky lg:top-6'>
                <Serch/>
            </div>
        
    {/* Navegación principal */}
            <div className='w-full lg:w-1/2'>
                <h2 className='font-merriweather text-3xl md:text-4xl text-white mb-6 text-center '>Navega por las Secciones</h2>       
                <ul className='flex flex-col gap-8 '>
                    <li className="home-link" style={{animationDelay: '0.1s'}}>
                        <Link 
                            className='group flex items-center justify-center gap-4 p-4 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-purple-800/80 to-purple-600/80 hover:from-purple-700 hover:to-purple-500 rounded-xl border-2 border-purple-400/30 hover:border-purple-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 backdrop-blur-sm' 
                        to={"/personajes"}
                        >
                            <FaHatWizard className='text-2xl md:text-3xl text-purple-300 group-hover:text-purple-200 transition-colors duration-300 icon-glow'/> 
                            <span className="font-merriweather bg-gradient-to-r from-purple-200 to-purple-100 bg-clip-text text-transparent">
                                PERSONAJES
                            </span>
                        </Link>
                    </li>
            
                    <li className="home-link" style={{animationDelay: '0.2s'}}>
                        <Link 
                            className=' font-merriweather group flex items-center justify-center gap-4 p-4 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-yellow-800/80 to-yellow-600/80 hover:from-yellow-700 hover:to-yellow-500 rounded-xl border-2 border-yellow-400/30 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-500/25 backdrop-blur-sm' 
                            to={"/hechizos"}
                            >
                                <FaMagic className='text-2xl md:text-3xl text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300 icon-glow'/> 
                                <span className="bg-gradient-to-r from-yellow-200 to-yellow-100 bg-clip-text text-transparent">
                                    HECHIZOS
                                </span>
                         </Link>
                    </li>
            
                    <li className="home-link" style={{animationDelay: '0.3s'}}>
                        <Link 
                            className=' font-merriweather group flex items-center justify-center gap-4 p-4 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-blue-800/80 to-blue-600/80 hover:from-blue-700 hover:to-blue-500 rounded-xl border-2 border-blue-400/30 hover:border-blue-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm' 
                            to={"/Libros"}
                        >
                            <FaBook className='text-2xl md:text-3xl text-blue-300 group-hover:text-blue-200 transition-colors duration-300 icon-glow'/> 
                            <span className="bg-gradient-to-r from-blue-200 to-blue-100 bg-clip-text text-transparent">
                             LIBROS
                            </span>
                        </Link>
                    </li>
                </ul>
            </div>
        </section>
       
        
     </div>   
    </div>
    
  )
}

export default Home