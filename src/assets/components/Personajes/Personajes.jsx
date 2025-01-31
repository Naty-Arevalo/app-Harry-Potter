import { useEffect, useState } from "react"
import PersonajesDetail from "./PersonajesDetail"

const Personajes = () => {

    const [personajes, setPersonajes] = useState({})
    console.log(personajes)

    useEffect(() =>{
        fetch("https://harry-potter-api.onrender.com/personajes")
        .then((res) => res.json())
        .then ((data) => {
            setPersonajes(data)
        } )
        .catch((e) => console.log(e));
    },[])

  return (
    <div>     
        <PersonajesDetail personajes={personajes}/>
    </div>
  )
}


export default Personajes