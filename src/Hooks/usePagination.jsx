import { useState } from "react"

// Hook personalizado para paginación
export const usePagination = (items, itemsPerPage = 9) => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage
    const currentItems = items.slice(startIndex, endIndex)

    const goToPage = (page) =>{
        setCurrentPage(Math.max(1, Math.min(page, totalPages)))
        window.scrollTo({top:0, behavior:'smooth'})
    }
    return{
        currentItems,
        currentPage,
        totalPages,
        goToPage,
        hasNextPage: currentPage < totalPages,
        hasPrevPage: currentPage > 1 
        
    }
}


