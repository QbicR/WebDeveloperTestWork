import React, { useState } from 'react'

import CurrenciesList from './CurrenciesList'
import Ticker from './Ticker'

const TradingTerminal = () => {
    const [currency, setCurrency] = useState(null)

    return (
        <div>
            <span>Обменять валюту</span>
            <Ticker currency={currency} />
            <CurrenciesList setCurrency={setCurrency} />
        </div>
    )
}

export default TradingTerminal
