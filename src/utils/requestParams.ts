const myHeaders = new Headers()
myHeaders.append('apikey', 'OyyFiY7rcXTifGR6lQ0jLEaGz4BMqey2')

type RequestOptionsType = {
    method: string
    redirect: any
    headers: Headers
}

export const requestOptions: RequestOptionsType = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders,
}
