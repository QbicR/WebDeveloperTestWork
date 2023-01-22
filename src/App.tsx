import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Header from './components/navbar/Header'
import Auth from './pages/Auth'
import Main from './pages/Main'
import './styles/index.css'

const App: React.FC = () => {
    return (
        <div className="app ">
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
