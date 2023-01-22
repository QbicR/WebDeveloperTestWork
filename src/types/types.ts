export type ApplicationListType = {
    amount: number
    changeTime: string
    creationTime: string
    id: number
    instrument: string
    price: number
    side: string
    status: string
}

export type FuncArgs = {
    name: string
    value: string
}

export type SortByType = 'asc' | 'desc'

export type CurrensiesItemType = [string, string]

export type CurrencyItem = [string, number]

export type CurrencyType = Record<string, number>

export type ColomnsType = Record<string, ColomnType>

type ColomnType = {
    name: string
    path?: string
}
