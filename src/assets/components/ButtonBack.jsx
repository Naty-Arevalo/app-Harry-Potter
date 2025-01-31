
import { Link } from 'react-router-dom'

const ButtonBack = () => {
  return (
    <div>
         <Link className="bg-rgb text-white border-2 rounded-2xl text-4xl px-1" to={"/"}>Volver</Link>
    </div>
  )
}

export default ButtonBack