import { requestOptions } from './requestParams'

export const fetchLiveCurrency = (currency: string, setCurrency: any) => {
    fetch(`https://api.apilayer.com/currency_data/live?source=${currency}`, requestOptions)
        .then((response) => response.json())
        .then((result: any) => setCurrency(result.quotes))
        .catch((error) => console.log('error', error))
}
