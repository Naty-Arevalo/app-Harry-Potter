import ButtonBack from "../ButtonBack";

const HechizosDetail = ({ harryPotter, id, setId }) => {
  const handleAnterior = () => {
    id > 1 && setId(id - 1);
  };

  const handleSiguiente = () => {
    setId(id + 1);
  };
  return (
    <>
      <div>
        <h1 className="text-9xl">Hechizos: </h1>
        <div>
          {harryPotter && (
            <div className="my-10 mx-20 p-5  items-center border-2 p-4 rounded shadow-2xl shadow-black ">
              <div>
                <h2 className=" text-6xl">Nombre: </h2>
              </div>
              <div>
                <p className="font-mono text-5xl">{harryPotter.hechizo}</p>
              </div>
              <div>
                <h2 className="text-6xl  p-3">Propósito: </h2>
              </div>
              <div>
                <p className="font-mono text-5xl">{harryPotter.uso}</p>
                </div>
            </div>
          )}
          <div>
            
          </div>
          {id > 1 ? (
                <button className="border-2 border-black rounded-xl px-2 mx-2" onClick={handleAnterior}>Anterior</button>
              ) : (
                <button className="opacity-10" disabled>Anterior</button>
              )}
              {id < 72 ? (
                <button className="border-2 border-black rounded-xl px-2 mx-2" onClick={handleSiguiente}>Siguiente</button>
              ) : (
                <button className="opacity-10" disabled>Siguiente</button>
              )}
        </div>
        <div className="mt-20">
        <ButtonBack/>
        </div>
        
      </div>
    </>
  );
};

export default HechizosDetail;
