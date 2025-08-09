import { usePagination } from "../../Hooks/usePagination"

const Pagination = ({ items, itemsPerPage = 9 }) => {
    const { currentPage, totalPages, goToPage, hasNextPage, hasPrevPage } = usePagination(items, itemsPerPage)

    return(
        <div className="flex justify-center items-center gap-2 mt-8">
            <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={!hasPrevPage}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
                Anterior
            </button>
            {[...Array(totalPages)].map((__, i) => (
                <button
                key={i + 1}
                onClick={() => goToPage(i + 1)}
                className={`px-3 py-2 rounded ${
                currentPage === i + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            >
                {i + 1}
                </button>
            ))}
            <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={!hasNextPage}
            className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
            >
                Siguiente
            </button>
        </div>
    )
}

export default Pagination