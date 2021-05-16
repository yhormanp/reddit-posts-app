import React from 'react'

const Pagination = ({currentPage, pageSize, posts, updateNewPage}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil( posts / pageSize); i++) {
        pageNumbers.push(i)
        
    }
    return (
        <nav>
            <ul className="pagination">
                {
                    pageNumbers.map(number => (
                        <li key={number} className={`page-item ${currentPage === number ? "page-current" : ""}`}>
                            <a href="!#" className="page-link" onClick={()=> updateNewPage(number)}>
                                {number}
                            </a>
                        </li>
                    ))
                }

            </ul>
            
        </nav>
    )
}

export default Pagination
