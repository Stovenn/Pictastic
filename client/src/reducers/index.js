import { combineReducers } from 'redux'
import exercises from './exercises'
import users from './users'

export default combineReducers({
    exercises,
    users
})