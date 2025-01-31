import { createContext, useContext, useState } from "react";

export const SearchContext = createContext()

export const useSearchContext = () => useContext(SearchContext)

export const SearchProvider = ({ children }) =>{
    const [results, setResults] = useState ( {personajes:[] , libros:[], hechizos:[]})
    
    return(
        <SearchContext.Provider value={{results, setResults}}>
        { children }
        </SearchContext.Provider>
    )
}