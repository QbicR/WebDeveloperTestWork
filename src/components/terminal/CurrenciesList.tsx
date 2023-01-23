import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

import { CurrensiesItemType } from '../../types/types'

interface ICurrenciesList {
    chooseCurrency: (result: string) => void
}

const CurrenciesList: React.FC<ICurrenciesList> = ({ chooseCurrency }) => {
    const currensies = useSelector((state: RootState) => state.currency.currencies)

    let currensiesArray: CurrensiesItemType[] = []
    if (currensies) {
        currensiesArray = Object.entries(currensies)
    }

    return (
        <div>
            <span>Выберите валюту</span>
            <select className="form-select" size={6} aria-label="size 3 select example">
                {currensiesArray.map((currency: CurrensiesItemType) => (
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
