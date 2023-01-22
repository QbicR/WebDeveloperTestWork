import React, { useState } from 'react'

import Table from '../components/table/Table'
import TradingTerminal from '../components/terminal/TradingTerminal'
import { fetchCurrensies } from '../redux/slices/asyncAction'
import { useAppDispatch } from '../redux/store'

export type CurrenciesType = Record<string, string>

const Main: React.FC = () => {
    const dispatch = useAppDispatch()
    const [arr, setArr] = useState<number[]>([])
    const auth = localStorage.getItem('auth')

    const handleAddTerminal = () => {
        dispatch(fetchCurrensies())
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
