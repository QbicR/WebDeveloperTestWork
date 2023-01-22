export const getRandomStatus = (statuses: any): string => {
    const randomInt = Math.floor(Math.random() * statuses.length)
    if (statuses[randomInt] !== 'Active') {
        return statuses[randomInt]
    } else {
        return 'Active'
    }
}
