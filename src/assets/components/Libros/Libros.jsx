import { useEffect, useState } from "react"
import { pedirDatos } from "../../Helpers/PedirDatos"
import ButtonBack from '../ButtonBack'

const Libros = () => {

    const [libros, setLibros ] = useState({})

    const [tapa, setTapa] = useState([])

    useEffect(() => {
   fetch("https://harry-potter-api.onrender.com/libros")
   .then ((res) => res.json())
   .then ((data) =>{
    setLibros(data)
   
   })
    }, [])

    useEffect(()=>{
        pedirDatos()
        .then((res) =>{
            setTapa(res)
         
        })
    },[])
    
  return (
    <>
    <h1 className="text-9xl">Libros</h1>
    <div className=" p-3">
        {libros.length > 0 && tapa.length > 0 && libros.map((libro) =>{
            const tapaCorresponiente = tapa.find (t => t.id === libro.id)
            return(
                <div className="flex justify-center items-center p-3 mb-5
                 border-b-2  h-auto" key={libro.id}>
                    <div className="w-1/2 ">
                        <h2 className="text-6xl">{libro.id}- {libro.libro}</h2>
                        <p className="text-3xl">{libro.fecha_de_lanzamiento}</p>
                        <p className="text-xl px-5 font-mono">{libro.descripcion}</p>
                    </div>
                    <div className="w-1/2 flex items-center justify-center">
                        {tapaCorresponiente ? (
                            <img src={tapaCorresponiente.img} alt={`tapa del libro ${libro.libro}`} className="max-w-full h-80 objet-cover drop-shadow-3xl" />
                        ): (
                            <p>No hay tapa disponible</p>
                        )}
                    </div>
                </div>
            )
        })}
    </div>
    <div>
       <ButtonBack/> 
    </div>
    {/* <div className="flex justify-between  border-2">

        {libros.length >1 &&
        <div className="w-1/2"  >
               {libros.map((libro) => (
                <div className="border-red border-2" key={libro.libro}>
                    <div className="">
                        <h2 className="text-6xl">{libro.id}, {libro.libro}</h2>
                        <p className="text-3xl">{libro.fecha_de_lanzamiento}</p>
                        <p className="text-xl4">{libro.descripcion}</p>
                    </div>
                </div>
            ))}    
        </div>
        }
        <div className="w-1/2">
            {tapa.map((tap) =>(
                <div key={tap.id}>
                    <div>
                        <img src={tap.img} alt={tap.id} />
                    </div>
                    
                </div>
                
            ))}
        </div>
    </div> */}
    
    </>
  )
}

export default Libros