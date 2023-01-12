import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setApplicationList, setChosenCurrency } from '../redux/slices/currenciesSlice'

const obj = {
    id: 1,
    creationTime: '000',
    changeTime: '001',
    status: 1,
    side: 'buy',
    price: 74,
    amount: 15000,
    instrument: 'usd/rub',
}

const Ticker = () => {
    const [value, setValue] = useState(null)
    const dispatch = useDispatch()
    const chosenCurrensies = useSelector((state) => state.currency.chosenCurrency.quotes)
    const applicationList = useSelector((state) => state.currency.applicationList)
    console.log(applicationList)

    const buyValue = (value * 1.01).toFixed(4)
    const sellValue = (value * 0.99).toFixed(4)

    useEffect(() => {
        dispatch(setChosenCurrency(JSON.parse(localStorage.getItem('requestedCurrensies'))))
    }, [])

    let chosenCurrensiesArray = []
    if (chosenCurrensies) {
        chosenCurrensiesArray = Object.entries(chosenCurrensies)
    }

    const addItemInState = () => {
        dispatch(setApplicationList(obj))
    }

    return (
        <div>
            <form className="card">
                <select
                    onChange={(event) => setValue(event.target.value)}
                    className="form-select"
                    aria-label="Default select example"
                >
                    {chosenCurrensiesArray.map((currency) => (
                        <option key={currency[0]} value={currency[1]}>
                            {currency[0].slice(0, 3)} / {currency[0].slice(-3)}
                        </option>
                    ))}
                </select>
                <input
                    className="form-control mb-4"
                    type="text"
                    placeholder="Количество"
                    aria-label="default input example"
                />
                <div className="d-flex justify-content-around mb-4">
                    <div className="d-block">
                        {value ? <p>{buyValue}</p> : <p>Цена</p>}
                        <button
                            onClick={() => addItemInState()}
                            type="button"
                            className="btn btn-success mr-5"
                        >
                            Купить
                        </button>
                    </div>
                    <div className="d-block">
                        {value ? <p>{sellValue}</p> : <p>Цена</p>}
                        <button type="button" className="btn btn-danger mr-5">
                            Продать
                        </button>
                    </div>
                </div>
            </form>
            {/* <form className="card w-25">
                <div className="justify-content-center mb-4">kgg</div>
                <input
                    className="form-control mb-4"
                    type="text"
                    placeholder="Количество"
                    aria-label="default input example"
                />
                <div className="d-flex justify-content-around mb-4">
                    <div className="d-block">
                        <p>Цена</p>
                        <button type="button" className="btn btn-success mr-5">
                            Купить
                        </button>
                    </div>
                    <div className="d-block">
                        <p>Цена</p>
                        <button type="button" className="btn btn-danger mr-5">
                            Продать
                        </button>
                    </div>
                </div>
            </form>
            <form className="card w-25">
                <div className="justify-content-center mb-4">kgg</div>
                <input
                    className="form-control mb-4"
                    type="text"
                    placeholder="Количество"
                    aria-label="default input example"
                />
                <div className="d-flex justify-content-around mb-4">
                    <div className="d-block">
                        <p>Цена</p>
                        <button type="button" className="btn btn-success mr-5">
                            Купить
                        </button>
                    </div>
                    <div className="d-block">
                        <p>Цена</p>
                        <button type="button" className="btn btn-danger mr-5">
                            Продать
                        </button>
                    </div>
                </div>
            </form> */}
        </div>
    )
}

export default Ticker
