const reducer = (exercises = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload
        case 'CREATE':
            return [...exercises, action.payload]
        default:
            return exercises
    }
}

export default reducer