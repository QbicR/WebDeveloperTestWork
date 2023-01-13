export const validate = (scheme, validation, setErrors, errors) => {
    scheme
        .validate(validation)
        .then(() => setErrors({}))
        .catch((err) => setErrors({ [err.path]: err.message }))
    return Object.keys(errors).length === 0
}
