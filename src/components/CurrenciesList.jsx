import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    setChosenCurrency,
    setCurrencies,
    setCurrentCurrency,
} from '../redux/slices/currenciesSlice'
import { requestOptions } from '../utils/requestParams'

const CurrenciesList = () => {
    const dispatch = useDispatch()
    const currensies = useSelector((state) => state.currency.currencies.currencies)

    useEffect(() => {
        dispatch(setCurrencies(JSON.parse(localStorage.getItem('currencies'))))
    }, [])

    let currensiesArray = []
    if (currensies) {
        currensiesArray = Object.entries(currensies)
    }

    const chooseCurrency = (currency) => {
        dispatch(setCurrentCurrency(currency))
        // fetch(`https://api.apilayer.com/currency_data/live?source=${currency}`, requestOptions)
        //     .then((response) => response.json())
        //     .then((result) => dispatch(setChosenCurrency(result)))
        //     .catch((error) => console.log('error', error))
    }

    return (
        <div>
            <span>Выберите валюту</span>
            <select className="form-select" size="7" aria-label="size 3 select example">
                {currensiesArray.map((currency) => (
                    <option
                        onClick={() => chooseCurrency(currency[0])}
                        key={currency[0]}
                        value={currency[0]}
                    >
                        {currency[0]}. {currency[1]}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default CurrenciesList
