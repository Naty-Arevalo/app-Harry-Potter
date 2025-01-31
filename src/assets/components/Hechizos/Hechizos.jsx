import { useEffect, useState } from 'react'
import HechizosDetail from './HechizosDetail';

const Hechizos = () => {
    const [harryPotter, setHarryPotter] = useState();


  const [id, setId] = useState(1)

  useEffect(() => {
    fetch(`https://harry-potter-api.onrender.com/hechizos/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setHarryPotter(data);
        console.log(data);
      })
      .catch((e) => console.log(e));
  }, [id]);

 

  return (<>
    <HechizosDetail harryPotter= {harryPotter} id={id} setId={setId} />
      </>)
}

export default Hechizos