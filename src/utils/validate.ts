import { LoginValidateType } from '../pages/Auth'

type CatchErrType = {
    path: string
    message: string
}

type ErrorsType = {
    login?: string
    password?: string
}

export const validate = (
    scheme: any,
    validation: LoginValidateType,
    setErrors: (s: any) => void,
    errors: ErrorsType,
) => {
    scheme
        .validate(validation)
        .then(() => setErrors({}))
        .catch((err: CatchErrType) => setErrors({ [err.path]: err.message }))
    return Object.keys(errors).length === 0
}
