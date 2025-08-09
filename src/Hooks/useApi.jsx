import {useState, useEffect, useCallback} from 'react'

export const useApi = (url, options = {}) =>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = useCallback(async ()=>{
        try {
            setLoading(true)
            setError(null)

            const response = await fetch(url,options)
            if(!response.ok){
                throw new Error (`HTTP error! status: ${response.status}`)
            }

            const result = await response.json()
            setData(result)
        } catch (err) {
            setError(err.message)
        }finally{
            setLoading(false)
        }
    },[url])

    useEffect(()=>{
        fetchData()
    },[fetchData])

    //funcion manual para volver a hacer la peticion . (por ejemplo en un boton 'Volver a cargar')
    const refetch = ()=>{
        fetchData()
    }

    return{data, loading,error,refetch}
}


//useCallback: memoriza la funcion para evitar que se vuelva a crear en cada render