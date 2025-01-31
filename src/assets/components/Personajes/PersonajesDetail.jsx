import ButtonBack from "../ButtonBack"


const PersonajesDetail = ( { personajes }) => {
    
  return (<>
  <div className="flex justify-around flex-row-reverse items-center p-5">
    <ButtonBack/>
    <h1 className="text-9xl ">Personajes:</h1>
  </div>
    {personajes.length > 1 ? (
        <div className='grid gap-y-10 gap-x-4 grid-cols-4 p-8'>
            {personajes.map((persona) =>(
                <div className="rounded-xl border border-white-600 shadow-white shadow-xl" key={persona.id} >
                    <h2 className="font-semibold">{persona.personaje}</h2>
                    <img className='objet-covers h-96 w-96'src={persona.imagen} alt={persona.apodo} />
                    <p className="text-3xl">Casa: {persona.casaDeHogwarts}</p>
                </div>
            
            ))}
        </div>
         ) : (
                <p>Cargando Personajes...</p>
            )}
  </>)
}

export default PersonajesDetail