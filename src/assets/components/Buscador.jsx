import { useState } from 'react'

const Buscador = () => {

    const [q, setQ] = useState("")
    const [results, setResults] =useState([])

    const searchCharacters = () =>{
        fetch("https://harry-potter-api.onrender.com/personajes")
        .then((res) => res.json())
        .then(data =>{
             console.log("data recived:,", data )
             console.log("q value", q)

             if(!q){
                console.log("q is empty")
                setResults([])
                return
            }
    const filteredResults = data.filter(character =>{
       
        const nombre=character.apodo ? character.apodo.toLowerCase() : '';
        console.log("character Name:", nombre)
        console.log("q" , q.toLowerCase())
        return nombre.includes(q.toLowerCase())
    })
    console.log("filtered results", filteredResults)
    setResults(filteredResults)
    })
    .catch(error =>{
        console.error('error fetching data', error)
    })
}
  return (
    <div className= 'mt-6 p-4'>
        <h1 className='text-4xl font-light'>Buscador Por Personajes:</h1>
        <div className='mb-4 '> 
            <input className=' m-3 rounded-2xl  border-gray-400 border-2 w-64 h-10 placeholder:italic p-2' 
            type="text"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder='Nombre de Personaje'/>            
            <button className=' bg-rgb text-white border-2 rounded-2xl text-4xl px-1  '
            onClick={searchCharacters}>Buscar
            </button>
            <div>
                {results.map((character) =>(
                    <div key={character.id} >
                        <h2 className='text-xl font-bold'>{character.personaje}</h2>
                        <p className='text-gray-700'>{character.casaDeHogwarts}</p>
                        <p>{character.apodo}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Buscador