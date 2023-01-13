import React from 'react'

const TableHeader = ({ colomns, handleSort }) => {
    return (
        <thead>
            <tr>
                {Object.keys(colomns).map((colomn) => (
                    <th
                        key={colomn}
                        {...{ role: colomns[colomn].path && 'button' }}
                        onClick={() => handleSort(colomns[colomn].path)}
                        scope="col"
                    >
                        {colomns[colomn].name}
                    </th>
                ))}
            </tr>
        </thead>
    )
}

export default TableHeader
