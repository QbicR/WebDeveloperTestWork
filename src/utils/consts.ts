import { ApplicationListType, ColomnsType } from '../types/types'

export const statuses: string[] = ['Active', 'Filled', 'Rejected', 'Cancelled']

export const colomns: ColomnsType = {
    id: {
        path: 'id',
        name: 'ID',
    },
    creationTime: {
        path: 'creationTime',
        name: 'Creating time',
    },
    changeTime: {
        path: 'changeTime',
        name: 'Change time',
    },
    status: {
        path: 'status',
        name: 'Status',
    },
    side: {
        path: 'side',
        name: 'Side',
    },
    price: {
        path: 'price',
        name: 'Price',
    },
    amount: {
        path: 'amount',
        name: 'Amount',
    },
    instrument: {
        path: 'instrument',
        name: 'Instrument',
    },
    cancellation: {
        name: 'Cancellation',
    },
}

export const mockData: ApplicationListType[] = [
    {
        id: 1673564733581,
        creationTime: '13-го января 2023, 2:05:33:733',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Active',
        side: 'Buy',
        price: 3.7235,
        amount: 15000,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733582,
        creationTime: '13-го января 2023, 2:05:33:633',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: 3.7235,
        amount: 1500,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733583,
        creationTime: '13-го января 2023, 2:05:33:433',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: 3.7235,
        amount: 15,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733584,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: 3.7235,
        amount: 1,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733585,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: 3.7235,
        amount: 150,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733586,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: 3.7235,
        amount: 150,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733587,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: 3.7235,
        amount: 150,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733588,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Cancel',
        side: 'Buy',
        price: 3.7235,
        amount: 150,
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733589,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Active',
        side: 'Buy',
        price: 3.7235,
        amount: 150,
        instrument: 'ALL/AMD',
    },
]
