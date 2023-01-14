import { createSlice } from '@reduxjs/toolkit'

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
            state.applicationList.unshift(action.payload)
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
