import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { paginate } from '../../utils/paginate'
import Pagination from '../ui/Pagination'
import { colomns } from '../../utils/consts'

const Table = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState({ path: 'name', order: 'asc' })
    const limit = 7
    const applicationList = useSelector((state) => state.currency.applicationList)

    const sortedData = _.orderBy(applicationList, [sortBy.path], [sortBy.order])

    const cropData = paginate(sortedData, currentPage, limit)

    const handleSort = (item) => {
        if (sortBy.path === item) {
            setSortBy({
                ...sortBy,
                order: sortBy.order === 'asc' ? 'desc' : 'asc',
            })
        } else {
            setSortBy({ path: item, order: 'asc' })
        }
    }

    return (
        <div>
            <table className="table container-md">
                <TableHeader colomns={colomns} handleSort={handleSort} />
                <TableBody sortedData={cropData} />
            </table>
            <Pagination
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                limit={limit}
                totalCount={applicationList.length}
            />
        </div>
    )
}

export default Table
