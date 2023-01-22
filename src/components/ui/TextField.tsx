import React, { useState } from 'react'

import { FuncArgs } from '../../types/types'

interface ITextField {
    label: string
    name: string
    value: string
    onChange: (arg: FuncArgs) => void
    error: string
    type?: string
}

const TextField: React.FC<ITextField> = ({ label, type, name, value, onChange, error }) => {
    const [showPassword, setShowPassword] = useState(false)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onChange({ name: event.target.name, value: event.target.value })
    }

    const getInputClasses = () => {
        return 'form-control' + (error ? ' is-invalid' : '')
    }

    const toggleShowPassword = () => {
        setShowPassword((prevState) => !prevState)
    }

    return (
        <div className="mb-4">
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input
                    type={showPassword ? 'text' : type}
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={getInputClasses()}
                />
                {type === 'password' && (
                    <button
                        className="btn btn-outline-secondary"
                        type="button"
                        onClick={toggleShowPassword}
                    >
                        <i>Show password</i>
                    </button>
                )}
                {error && <div className="invalid-feedback">{error}</div>}
            </div>
        </div>
    )
}

export default TextField
