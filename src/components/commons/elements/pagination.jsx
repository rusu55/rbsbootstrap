import React, { Fragment } from 'react'

import PropTypes from 'prop-types'
import _ from 'lodash'


const Pagination = ({itemsCount, pageSize, currentPage, onPageChange}) =>{

    const pagesCount = Math.ceil(itemsCount / pageSize)
    if (pageSize === 1) return null    
    const pages = _.range(1, pagesCount + 1)
    return(
        <Fragment>
            <nav>
                <ul className="pagination">
                    { pages.map(page => (
                        <li key={page} className={page === currentPage ? "page-item active" : "page-item"}>
                            <button className="page-link" onClick ={()=>onPageChange(page)}>{page}</button>
                        </li>
                    ))}
                </ul>
            </nav>
        </Fragment>
    )
}

Pagination.propTypes ={
    onPageChange: PropTypes.func.isRequired,
    itemsCount: PropTypes.number.isRequired,
    pageSize: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired
}

export default Pagination