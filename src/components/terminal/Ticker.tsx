import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import 'moment/locale/ru'

import { setApplicationList } from '../../redux/slices/currenciesSlice'
import { getRandomStatus } from '../../utils/getRandomStatus'
import { statuses } from '../../utils/consts'
import { CurrencyItem, CurrencyType } from '../../types/types'

interface ITicker {
    currency: CurrencyType
}

const Ticker: React.FC<ITicker> = ({ currency }) => {
    const [value, setValue] = useState(0)
    const [instrument, setInstrument] = useState('')
    const [amount, setAmount] = useState(0)
    const dispatch = useDispatch()
    const moment = require('moment')
    moment.locale('ru')

    const isButtonActive = instrument !== '' && amount > 0

    const buyValue = Number((value * 1.01).toFixed(4))
    const sellValue = Number((value * 0.99).toFixed(4))

    let chosenCurrensiesArray: CurrencyItem[] = []
    if (currency) {
        chosenCurrensiesArray = Object.entries(currency)
    }

    const addItemInState = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.target as HTMLElement
        const side = button.innerText
        const newItem = {
            id: Date.now(),
            creationTime: moment().format('Do MMMM YYYY, h:mm:ss:ms'),
            changeTime: moment().format('Do MMMM YYYY, h:mm:ss:ms'),
            status: getRandomStatus(statuses),
            side: side === 'Купить' ? 'Buy' : 'Sell',
            price: side === 'Купить' ? buyValue : sellValue,
            amount,
            instrument,
        }
        setAmount(0)
        dispatch(setApplicationList(newItem))
    }

    const onChangeSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const eventArray = event.target.value.split(',')
        const instrument = eventArray[0].slice(0, 3) + '/' + eventArray[0].slice(-3)
        setInstrument(instrument)

        setValue(Number(eventArray[1]))
    }

    return (
        <div>
            <form className="card">
                <select
                    onChange={(event) => onChangeSelect(event)}
                    className="form-select"
                    aria-label="Default select example"
                >
                    <option value={currency.timestamp} defaultValue={'Выберите валюту'}>
                        Выберите валюту
                    </option>
                    {chosenCurrensiesArray.map((currency: any) => (
                        <option key={currency[0]} value={currency}>
                            {currency[0].slice(0, 3)} / {currency[0].slice(-3)}
                        </option>
                    ))}
                </select>
                <input
                    className="form-control mb-2"
                    type="text"
                    placeholder="Количество"
                    onChange={(e) => setAmount(Number(e.target.value))}
                    value={amount}
                    aria-label="default input example"
                />
                <div className="d-flex justify-content-around mb-2">
                    <div className="d-block">
                        {value ? <p>{buyValue}</p> : <p>Цена</p>}
                        <button
                            disabled={!isButtonActive}
                            onClick={(e) => addItemInState(e)}
                            type="button"
                            className="btn btn-success mr-5"
                        >
                            Купить
                        </button>
                    </div>
                    <div className="d-block">
                        {value ? <p>{sellValue}</p> : <p>Цена</p>}
                        <button
                            disabled={!isButtonActive}
                            onClick={(e) => addItemInState(e)}
                            type="button"
                            className="btn btn-danger mr-5"
                        >
                            Продать
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Ticker
