const myHeaders = new Headers()
myHeaders.append('apikey', process.env.REACT_APP_API_KEY)

export const requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
}
