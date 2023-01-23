import { ApplicationListType } from './../../types/types'
import { createSlice } from '@reduxjs/toolkit'
import { CurrenciesType } from '../../pages/Main'
import { fetchCurrensies } from './asyncAction'

enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
}

interface ICurrencySlice {
    currencies: CurrenciesType
    applicationList: ApplicationListType[]
    status: Status
}

const initialState: ICurrencySlice = {
    currencies: {},
    applicationList: [],
    status: Status.LOADING,
}

const currencySlice = createSlice({
    name: 'currency',
    initialState,
    reducers: {
        setApplicationList: (state, action) => {
            state.applicationList.unshift(action.payload)
        },
        deleteApplicationItem: (state, action) => {
            state.applicationList = state.applicationList.filter(
                (item) => item.id !== action.payload,
            )
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCurrensies.pending, (state) => {
            state.status = Status.LOADING
            state.currencies = {}
        })

        builder.addCase(fetchCurrensies.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.currencies = action.payload.currencies
        })

        builder.addCase(fetchCurrensies.rejected, (state) => {
            state.status = Status.ERROR
            state.currencies = {}
        })
    },
})

export const { setApplicationList, deleteApplicationItem } = currencySlice.actions

export default currencySlice.reducer
