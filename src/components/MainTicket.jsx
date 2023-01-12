import React, { useState } from 'react'
import CurrenciesList from './CurrenciesList'
import Ticker from './Ticker'

const MainTicket = () => {
    const [currency, setCurrency] = useState(null)

    return (
        <div>
            <Ticker currency={currency} />
            <CurrenciesList setCurrency={setCurrency} />
        </div>
    )
}

export default MainTicket
