import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Auth from './pages/Auth'
import Main from './pages/Main'
import './styles/index.css'

function App() {
    return (
        <div className="app ">
            <Header />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/auth" element={<Auth />} />
                    <Route path="*" element={<Main />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
