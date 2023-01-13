import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = () => {
    const navigate = useNavigate()
    const auth = localStorage.getItem('auth')
    const { pathname } = useLocation()

    const logOut = () => {
        localStorage.removeItem('auth')
        navigate('/auth')
    }

    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">Test App</span>
                    {auth ? (
                        <button className="btn btn-outline-danger" type="submit" onClick={logOut}>
                            Выйти
                        </button>
                    ) : (
                        !auth && (
                            <button
                                className="btn btn-outline-success"
                                type="submit"
                                onClick={logOut}
                                hidden={pathname === '/auth'}
                            >
                                Войти
                            </button>
                        )
                    )}
                </div>
            </nav>
        </>
    )
}

export default Header
