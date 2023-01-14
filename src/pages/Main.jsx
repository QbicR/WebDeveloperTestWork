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
            <div className="d-flex">
                {auth && arr.length < 4 && (
                    <button className="btn btn-outline-primary" onClick={handleAddTerminal}>
                        Add terminal
                    </button>
                )}
                {arr.map((_, index) => (
                    <div className="card w-25" key={index}>
                        <TradingTerminal />
                    </div>
                ))}
            </div>
            <Table />
        </>
    )
}

export default Main
