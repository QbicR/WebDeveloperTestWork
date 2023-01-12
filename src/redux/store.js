import { configureStore } from '@reduxjs/toolkit'
import currenciesSlice from './slices/currenciesSlice'

export const store = configureStore({
    reducer: {
        currency: currenciesSlice,
    },
})
