import React from 'react'
import { useDispatch } from 'react-redux'

import { deleteApplicationItem } from '../../redux/slices/currenciesSlice'
import { ApplicationListType } from '../../types/types'

interface ITableBody {
    cropData: ApplicationListType[]
}

const TableBody: React.FC<ITableBody> = ({ cropData }) => {
    const dispatch = useDispatch()

    const handleDeleteActiveItem = (id: number) => {
        dispatch(deleteApplicationItem(id))
    }

    return (
        <tbody>
            {cropData.map((item: ApplicationListType) => (
                <tr key={item.id}>
                    <td className="p-3 mb-2">{item.id}</td>
                    <td className="p-3 mb-2">{item.creationTime}</td>
                    <td className="p-3 mb-2">{item.changeTime}</td>
                    <td
                        className={
                            item.status === 'Active'
                                ? `text-success p-3 mb-2`
                                : `text-danger p-3 mb-2`
                        }
                    >
                        {item.status}
                    </td>
                    <td
                        className={
                            item.status === 'Active'
                                ? `text-success p-3 mb-2`
                                : `text-danger p-3 mb-2`
                        }
                    >
                        {item.side}
                    </td>
                    <td
                        className={
                            item.status === 'Active'
                                ? `text-success p-3 mb-2`
                                : `text-danger p-3 mb-2`
                        }
                    >
                        {item.price}
                    </td>
                    <td className="p-3 mb-2">{item.amount}</td>
                    <td className="p-3 mb-2">{item.instrument}</td>
                    {item.status === 'Active' && (
                        <td
                            className="p-3 mb-2"
                            {...{ role: 'button' }}
                            onClick={() => handleDeleteActiveItem(item.id)}
                        >
                            Cancel
                        </td>
                    )}
                </tr>
            ))}
        </tbody>
    )
}

export default TableBody
