const reducer = (users = [], action)=>{
    switch (action.type) {
        case 'FETCH_ALL_USERS':
            return action.payload
        case 'CREATE':
            return [users]
        default:
            return users
    }
}

export default reducer