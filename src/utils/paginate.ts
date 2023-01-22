import { ApplicationListType } from '../types/types'

export const paginate = (
    items: ApplicationListType[],
    page: number,
    limit: number,
): ApplicationListType[] => {
    let list: ApplicationListType[] = []
    if (items) {
        const startIndex = (page - 1) * limit
        list = [...items].splice(startIndex, limit)
    }
    return list
}
