import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setApplicationList } from '../redux/slices/currenciesSlice'
import { getRandomStatus } from '../utils/getRandomStatus'
import 'moment/locale/ru'

const statuses = ['Active', 'Filled', 'Rejected', 'Cancelled']

const Ticker = ({ currency }) => {
    const [value, setValue] = useState(null)
    const [instrument, setInstrument] = useState(null)
    const [amount, setAmount] = useState('')
    const dispatch = useDispatch()
    const moment = require('moment')
    moment.locale('ru')

    const buyValue = (value * 1.01).toFixed(4)
    const sellValue = (value * 0.99).toFixed(4)

    let chosenCurrensiesArray = []
    if (currency?.quotes) {
        chosenCurrensiesArray = Object.entries(currency.quotes)
    }

    const addItemInState = (e) => {
        const side = e.target.innerText
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
        console.log(newItem)
        setAmount('')
        dispatch(setApplicationList(newItem))
    }

    const onChangeSelect = (event) => {
        const eventArray = event.target.value.split(',')
        const instrument = eventArray[0].slice(0, 3) + '/' + eventArray[0].slice(-3)
        setInstrument(instrument)
        setValue(eventArray[1])
    }

    return (
        <div>
            <form className="card">
                <select
                    onChange={(event) => onChangeSelect(event)}
                    className="form-select"
                    aria-label="Default select example"
                >
                    {chosenCurrensiesArray.map((currency) => (
                        <option key={currency[0]} value={currency}>
                            {currency[0].slice(0, 3)} / {currency[0].slice(-3)}
                        </option>
                    ))}
                </select>
                <input
                    className="form-control mb-4"
                    type="text"
                    placeholder="Количество"
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    aria-label="default input example"
                />
                <div className="d-flex justify-content-around mb-4">
                    <div className="d-block">
                        {value ? <p>{buyValue}</p> : <p>Цена</p>}
                        <button
                            disabled={!amount}
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
                            disabled={!amount}
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
