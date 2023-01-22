import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as yup from 'yup'

import TextField from '../components/ui/TextField'
import { FuncArgs } from '../types/types'
import { validate } from '../utils/validate'

export type LoginValidateType = {
    login: string
    password: string
}

const Auth: React.FC = () => {
    const [data, setData] = useState({
        login: '',
        password: '',
    })
    const [errors, setErrors] = useState({
        login: '',
        password: '',
    })
    const navigate = useNavigate()

    const validateScheme = yup.object().shape({
        password: yup.string().matches(/(?=.{4,})/, 'Минимальная длина 4 символа'),
        login: yup.string().matches(/(?=.{4,})/, 'Минимальная длина 4 символа'),
    })

    const loginValidate: LoginValidateType = {
        login: data.login,
        password: data.password,
    }

    useEffect(() => {
        validate(validateScheme, loginValidate, setErrors, errors)
    }, [data])

    const isValid = Object.keys(errors).length === 0

    const handleChange = (target: FuncArgs) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value,
        }))
    }

    const onLogin = () => {
        navigate('/')
        localStorage.setItem('auth', 'true')
    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6 offset-md-3 shadow p-4 rounded-3">
                    <h3 className="mb-4">Login</h3>
                    <form onSubmit={onLogin}>
                        <TextField
                            label="Login"
                            name="login"
                            value={data.login}
                            onChange={handleChange}
                            error={errors.login}
                        />
                        <TextField
                            label="Password"
                            type="password"
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                            error={errors.password}
                        />
                        <button
                            type="submit"
                            disabled={!isValid}
                            className="btn btn-primary w-100 mx-auto mb-2"
                        >
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Auth
