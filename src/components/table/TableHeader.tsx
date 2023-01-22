import React from 'react'

import { ColomnsType } from '../../types/types'
import { colomns } from '../../utils/consts'

interface ITableHeader {
    handleSort: (path: string) => void
}

const TableHeader: React.FC<ITableHeader> = ({ handleSort }) => {
    const items: ColomnsType = colomns

    return (
        <thead>
            <tr>
                {Object.keys(items).map((colomn) => (
                    <th
                        key={colomn}
                        {...{ role: items[colomn].path && 'button' }}
                        onClick={() => handleSort(items[colomn].path || '')}
                        scope="col"
                    >
                        {items[colomn].name}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
