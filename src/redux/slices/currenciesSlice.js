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
            state.applicationList.push(action.payload)
        },
    },
})

export const { setCurrencies, setApplicationList } = currencySlice.actions

export default currencySlice.reducer
