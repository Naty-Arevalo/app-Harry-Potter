
import Personajes from '../Personajes/Personajes'
import Hechizos from '../Hechizos/Hechizos'
import Libros from '../Libros/Libros'
import { Link } from 'react-router-dom'
import Buscador from '../Buscador'
import Serch from '../Serch'



const Home = () => {
  return (<>
  <section><Serch/></section>
    <section >
        <ul className='flex flex-col gap-4 p-9 '>
            <li>
                <Link className='inline-block  py-2 px-4 rounded text-6xl hover:border-b-4 font-grey qo' to={"/personajes"} element={<Personajes/>}> PERSONAJES 🧙 
                </Link>
            </li>
            <li>
                <Link className='text-6xl py-2 m-5 p-3  hover:border-b-4 font-grey qo text-3xl 'to={"/hechizos"} element={<Hechizos/>}>HECHIZOS 🪄</Link>
            </li>
            <li>
                <Link className='text-6xl py-2 m-5 p-3   hover:border-b-4 font-grey qo text-3xl  'to={"/Libros"} element={<Libros/>}>LIBROS 📖</Link>
            </li>
        </ul>
    </section>
    <section><Buscador/></section>
    </>)
}

export default Home