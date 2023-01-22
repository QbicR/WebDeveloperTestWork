import { createAsyncThunk } from '@reduxjs/toolkit'
import { CurrenciesType } from '../../pages/Main'
import { requestOptions } from '../../utils/requestParams'
import { setCurrencies } from './currenciesSlice'

export const fetchCurrensies = createAsyncThunk('pizza/fetchPizzasStatus', async () => {
    const data = await fetch('https://api.apilayer.com/currency_data/list', requestOptions)

    const currencies = data.json()

    return await currencies
})
