import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Table from '../components/table/Table'
import TradingTerminal from '../components/terminal/TradingTerminal'
import { setCurrencies } from '../redux/slices/currenciesSlice'
import { requestOptions } from '../utils/requestParams'

const Main = () => {
    const dispatch = useDispatch()
    const [arr, setArr] = useState([])
    const auth = localStorage.getItem('auth')

    useEffect(() => {
        fetch('https://api.apilayer.com/currency_data/list', requestOptions)
            .then((response) => response.json())
            .then((result) => dispatch(setCurrencies(result)))
            .catch((error) => console.log('error', error))
    }, [])

    const handleAddTerminal = () => {
        setArr([...arr, 1])
    }

    return (
        <>
            {auth && arr.length < 4 && (
                <button className="btn btn-outline-primary" onClick={handleAddTerminal}>
                    Add terminal
                </button>
            )}
            <div className="d-flex">
                {arr.map((_, index) => (
                    <div className="card w-25 p-1" key={index}>
                        <TradingTerminal />
                    </div>
                ))}
            </div>
            {auth ? (
                <Table />
            ) : (
                <div className="container row mt-5">
                    <h3 className="col-md-6 offset-md-3 shadow p-4 rounded-3">
                        Авторизуйтесь, чтобы пользоваться приложением
                    </h3>
                </div>
            )}
        </>
    )
}

export default Main
