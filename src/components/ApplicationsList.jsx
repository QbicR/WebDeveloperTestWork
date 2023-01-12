import React from 'react'
import { useSelector } from 'react-redux'

const mockData = [
    {
        id: 1673564733581,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733582,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733583,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733584,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733585,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733586,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733587,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733588,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733589,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
]

const ApplicationsList = () => {
    const applicationList = useSelector((state) => state.currency.applicationList)

    return (
        <div>
            <table className="table container-md">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Creating time</th>
                        <th>Change time</th>
                        <th>Status</th>
                        <th>Side</th>
                        <th>Price</th>
                        <th>Amount</th>
                        <th>Instrument</th>
                    </tr>
                </thead>
                <tbody>
                    {mockData.map((item) => (
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
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ApplicationsList
