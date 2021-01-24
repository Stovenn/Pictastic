import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import { useSelector, } from 'react-redux'
import Exercise from './Exercise'

const ExercisesList = () => { 
    // const handleDeleteExercise = (id) =>{
    //     axios.delete(`http://localhost:5000/exercises/${id}`)
    //         .then(res => console.log(res.data))
    //         setExercises(exercises.filter(el => el._id !== id))
    // }
    const exercises = useSelector(state => state.exercises)

        return (
        <div className="container">
            <h1 className="mb-4">Exercises list</h1>
            {
                !exercises.length ? (<div className="spinner-grow"><span className="sr-only">Loading...</span></div>) : (
                <table className="table table-dark">
                    <thead>
                        <tr>
                        <th scope="col">Username</th>
                        <th scope="col">Description</th>
                        <th scope="col">Duration</th>
                        <th scope="col">Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {exercises.map((exercise)=>(
                            <Exercise key={exercise._id} exercise={exercise} />
                        ))}                        
                    </tbody>
                </table>
                )
            }
            
        </div>
    )
}

export default ExercisesList