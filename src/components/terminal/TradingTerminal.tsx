import React, { useState } from 'react'
import { fetchLiveCurrency } from '../../utils/fetchLiveCurrency'

import CurrenciesList from './CurrenciesList'
import Ticker from './Ticker'

const TradingTerminal: React.FC = () => {
    const [currency, setCurrency] = useState<Record<string, number>>({})

    const chooseCurrency = (currency: string) => {
        fetchLiveCurrency(currency, setCurrency)
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
