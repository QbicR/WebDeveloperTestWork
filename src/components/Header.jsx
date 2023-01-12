import React from 'react'

const Header = () => {
    return (
        <>
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand">Test App</span>
                    <button className="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Header
