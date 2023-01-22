const myHeaders = new Headers()
myHeaders.append('apikey', 'ZztmhWrYtGMOOOez067UMoHtc2SjiqS3')

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
