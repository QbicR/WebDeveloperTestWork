import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import _ from 'lodash'

import TableHeader from './TableHeader'
import TableBody from './TableBody'
import { paginate } from '../../utils/paginate'
import Pagination from '../ui/Pagination'
import { ApplicationListType, SortByType } from '../../types/types'
import { RootState } from '../../redux/store'

const Table: React.FC = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState<{
        path: string
        order: SortByType
    }>({ path: 'id', order: 'asc' })
    const limit: number = 7
    const applicationList: ApplicationListType[] = useSelector(
        (state: RootState) => state.currency.applicationList,
    )

    const sortedData = _.orderBy(applicationList, [sortBy.path], [sortBy.order])

    const cropData = paginate(sortedData, currentPage, limit)

    const handleSort = (item: string) => {
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
                <TableHeader handleSort={handleSort} />
                <TableBody cropData={cropData} />
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
