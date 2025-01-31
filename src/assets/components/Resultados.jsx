import { useContext } from "react"
import { SearchContext } from "./Context/CartContext"
import ButtonBack from "./ButtonBack"


const Resultados = () => {

    const {results} = useContext(SearchContext)
  return (<>
    <div className="">
        {results.personajes.length > 0 && (
            <div >
                <h2 className="text-4xl">Personaje</h2>
                {results.personajes.map((personaje) =>(
                    <div key={personaje.id} className="flex justify-around">
                        <ul>
                            <li>{personaje.personaje}</li>
                        </ul>
                        {/* <p>{personaje.casaDeHogwarts}</p> */}
                        
                    </div>
                ))}
            </div>
        )}
        {results.libros.length >0 && (
            <div>
                <h2>Libro</h2>
                {results.libros.map((libro) => (
                    <div key={libro.id}>
                        <h2>{libro.libro}</h2>
                        <p>{libro.descripcion}</p>
                    </div>
                ))}
            </div>
        )}
        {results.hechizos.length > 0 && (
            <div>
                <h2>Hechizo</h2>
                {results.hechizos.map((hechizo) =>(
                <div key={hechizo.id}>
                    <h2>{hechizo.hechizo}</h2>
                    <p>{hechizo.uso}</p>
                </div>
            ))}
            </div>
            
        )}
    </div>
    <div>
       <ButtonBack/>
    </div>
    </>)
}

export default Resultados