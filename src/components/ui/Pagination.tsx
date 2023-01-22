import React from 'react'

interface IPagination {
    currentPage: number
    setCurrentPage: (page: number) => void
    limit: number
    totalCount: number
}

const Pagination: React.FC<IPagination> = ({ currentPage, setCurrentPage, limit, totalCount }) => {
    const pageCount = Math.ceil(totalCount / limit)
    const pages: number[] = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <nav aria-label="...">
            <ul className="pagination">
                {pages.map(
                    (page) =>
                        pageCount > 1 && (
                            <li
                                className={currentPage === page ? 'page-item active' : 'page-item'}
                                key={page}
                                onClick={() => setCurrentPage(page)}
                            >
                                <a className="page-link" href="#">
                                    {page}
                                </a>
                            </li>
                        ),
                )}
            </ul>
        </nav>
    )
}

export default Pagination
