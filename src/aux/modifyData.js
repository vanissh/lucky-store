export const modifyData = (data) => {
    const newData = {}

    data.forEach(item => {
        newData[item.name] = item.items
    })

    return newData
}