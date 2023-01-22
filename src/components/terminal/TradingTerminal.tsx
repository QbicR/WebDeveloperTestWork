import React, { useState } from 'react'
import { requestOptions } from '../../utils/requestParams'

import CurrenciesList from './CurrenciesList'
import Ticker from './Ticker'

const TradingTerminal: React.FC = () => {
    const [currency, setCurrency] = useState<Record<string, number>>({})

    const chooseCurrency = (currency: string) => {
        fetch(`https://api.apilayer.com/currency_data/live?source=${currency}`, requestOptions)
            .then((response) => response.json())
            .then((result: any) => setCurrency(result.quotes))
            .catch((error) => console.log('error', error))
    }

    return (
        <div>
            <span>Обменять валюту</span>
            <Ticker currency={currency} />
            <CurrenciesList chooseCurrency={chooseCurrency} />
        </div>
    )
}

export default TradingTerminal
