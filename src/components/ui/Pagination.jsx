import React from 'react'

const Pagination = ({ currentPage, setCurrentPage, limit, totalCount }) => {
    const pageCount = Math.ceil(totalCount / limit)
    const pages = []

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
