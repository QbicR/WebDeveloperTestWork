import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import ApplicationsList from '../components/ApplicationsList'
import MainTicket from '../components/MainTicket'
import { setCurrencies } from '../redux/slices/currenciesSlice'
import { requestOptions } from '../utils/requestParams'

// const ws = new WebSocket('wss://api.apilayer.com/currency_data/list')
const Main = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        // fetch('https://api.apilayer.com/currency_data/list', requestOptions)
        //     .then((response) => response.json())
        //     .then((result) => dispatch(setCurrencies(result)))
        //     .catch((error) => console.log('error', error))
    }, [])

    return (
        <>
            <div className="d-flex">
                <div className="card w-25">
                    <span>Обменять валюту</span>
                    <MainTicket />
                </div>
                <div className="card w-25">
                    <span>Обменять валюту</span>
                    <MainTicket />
                </div>
                <div className="card w-25">
                    <span>Обменять валюту</span>
                    <MainTicket />
                </div>
                <div className="card w-25">
                    <span>Обменять валюту</span>
                    <MainTicket />
                </div>
            </div>
            <ApplicationsList />
        </>
    )
}

export default Main
