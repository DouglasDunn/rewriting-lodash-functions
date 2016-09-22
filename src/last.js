const last = (arr) => {
    if (arr === null || arr === undefined) {
        return false
    }
    let i = arr.length - 1
    return arr[i]
}
export {
    last
}