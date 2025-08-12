
import { FaHome } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const ButtonBack = () => {
  return (
    <div>
         <Link 
           className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-800/30 hover:bg-yellow-700/30 border-2 border-yellow-400/30 hover:border-yellow-300 rounded-xl transition-all duration-300 font-merriweather font-semibold text-yellow-200 hover:text-yellow-100 transform hover:scale-105" 
           to={"/"}
         >
           <FaHome className="text-lg"/>
           <span className='text-center'>Volver al Home</span>
         </Link>
    </div>
  )
}

export default ButtonBack