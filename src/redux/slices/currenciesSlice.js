import { createSlice } from '@reduxjs/toolkit'

const mockData = [
    {
        id: 1673564733581,
        creationTime: '13-го января 2023, 2:05:33:733',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Active',
        side: 'Buy',
        price: '3.7235',
        amount: '15000',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733582,
        creationTime: '13-го января 2023, 2:05:33:633',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '1500',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733583,
        creationTime: '13-го января 2023, 2:05:33:433',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '15',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733584,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Filled',
        side: 'Buy',
        price: '3.7235',
        amount: '1',
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
        status: 'Cancel',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
    {
        id: 1673564733589,
        creationTime: '13-го января 2023, 2:05:33:533',
        changeTime: '13-го января 2023, 2:05:33:533',
        status: 'Active',
        side: 'Buy',
        price: '3.7235',
        amount: '150',
        instrument: 'ALL/AMD',
    },
]

const initialState = {
    currencies: {},
    applicationList: [],
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrencies: (state, action) => {
            state.currencies = action.payload.currencies
        },
        setApplicationList: (state, action) => {
            state.applicationList.push(action.payload)
        },
        deleteApplicationItem: (state, action) => {
            state.applicationList = state.applicationList.filter(
                (item) => item.id !== action.payload,
            )
        },
    },
})

export const { setCurrencies, setApplicationList, deleteApplicationItem } = currencySlice.actions

export default currencySlice.reducer
