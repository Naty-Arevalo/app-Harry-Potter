import { useEffect, useState } from "react"

export const useSearch = (searchFunction, delay = 300) => {
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const timeoutId = setTimeout(async ()=>{
            if(query.trim()){
                setLoading(true)
                try {
                    const searchResults = await searchFunction(query)
                    setResults(searchResults)
                } catch (error) {
                    console.error('Error en busqueda:', error)
                    setResults([])
                }finally{
                    setLoading(false)
                }
            }else{
                setResults([])
            }
        }, delay)

        return () => clearTimeout(timeoutId)
    },[query, searchFunction,delay])

    return{ query,setQuery,results,loading}
}