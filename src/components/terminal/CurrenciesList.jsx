import React from 'react'
import { useSelector } from 'react-redux'
import { requestOptions } from '../../utils/requestParams'

const CurrenciesList = ({ setCurrency }) => {
    const currensies = useSelector((state) => state.currency?.currencies)

    let currensiesArray = []
    if (currensies) {
        currensiesArray = Object.entries(currensies)
    }

    const chooseCurrency = (currency) => {
        // fetch(`https://api.apilayer.com/currency_data/live?source=${currency}`, requestOptions)
        //     .then((response) => response.json())
        //     .then((result) => setCurrency(result))
        //     .catch((error) => console.log('error', error))
    }

    return (
        <div>
            <span>Выберите валюту</span>
            <select className="form-select" size="6" aria-label="size 3 select example">
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
