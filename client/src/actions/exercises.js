import * as api from '../api'

export const getExercises = () => async(dispatch)=> {
    try {
        const { data } = await api.fetchExercises()

        dispatch({type: 'FETCH_ALL', payload: data})
    } catch (error) {
        console.log(error.message)
    }
}

export const createExercise = (exercise) => async (dispatch) => {
    try {
        const { data } = await api.createExercise(exercise)
        
        dispatch({ type: 'CREATE', payload: data })
    } catch (error) {
        console.log(error)
    }
}