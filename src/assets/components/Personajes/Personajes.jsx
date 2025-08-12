
import PersonajesDetail from "./PersonajesDetail"
import { useApi} from "../../../Hooks/useApi"
import { FaHatWizard } from "react-icons/fa"
// import { DiCelluloid } from "react-icons/di"
import Buscador from '../Buscador'

const Personajes = () => {

   const {data: personajes,loading,error} = useApi("https://harry-potter-api.onrender.com/personajes")


   if(loading) return(
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
      <div className="text-center">
        <FaHatWizard className="text-4xl sm:text-6xl text-purple animate-spin mx-auto mb-4"/>
        <p className="text-lg sm:text-2xl text-white font-merriweather">Cargando Personajes...</p>
      </div>
    </div>
   )
    
    if (error) return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4">
        <div  className="text-center">
          <FaHatWizard className="text-lg sm:text-6xl text-red-400 mx-auto mb-4"/>
          <p className="text-lg sm:text-2xl text-red-400 font-merriweather">Error:{error}</p>
        </div>
      </div>
    )

    return(
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
             style={{backgroundImage: "url('https://static1.colliderimages.com/wordpress/wp-content/uploads/2022/03/Hogwarts-Castle.jpg')"}}>
        </div>

        {/*Header de la pagina*/}
        <div className="realtive z-10">
          <header className="text-center py-6 sm:py-8 px-4">
            <h1 className="font-crimson text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white to-purple-500 bg-clip-text text-transparent">Personajes Magicos</h1>
            <p className="font-crimson text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 px-4">Explora todos los personajes del mundo Harry Potter</p>
          </header>
        </div>
        

      {/*Buscador*/}
      <div className="max-w-4xl mx-auto px-4 mb-6 sm:mb-8">
        <Buscador/>
      </div>

      {/*Lista Personajes*/}
      <div className="max-w-7xl mx-auto px-2 sm:px-4">
        <PersonajesDetail personajes= {personajes || []}/>
      </div>
      </div>
    )
}


export default Personajes