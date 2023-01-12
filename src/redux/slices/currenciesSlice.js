import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    currencies: {},
    currentCurrency: '',
    chosenCurrency: {},
    applicationList: [],
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setCurrencies: (state, action) => {
            state.currencies = action.payload
        },
        setCurrentCurrency: (state, action) => {
            state.currentCurrency = action.payload
        },
        setChosenCurrency: (state, action) => {
            state.chosenCurrency = action.payload
        },
        setApplicationList: (state, action) => {
            state.applicationList.push(action.payload)
        },
    },
})

export const { setCurrencies, setCurrentCurrency, setChosenCurrency, setApplicationList } =
    currencySlice.actions

export default currencySlice.reducer
