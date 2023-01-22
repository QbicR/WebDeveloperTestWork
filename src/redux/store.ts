import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import currenciesSlice from './slices/currenciesSlice'

export const store = configureStore({
    reducer: {
        currency: currenciesSlice,
    },
})

export type RootState = ReturnType<typeof store.getState>

type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
