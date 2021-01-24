import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

import { useSelector, useDispatch } from 'react-redux'
import { createExercise } from '../actions/exercises'

export default function CreateExercise() {

    const [exerciseData, setExerciseData] = useState({username: '', description: '', duration: '', date: ''})
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()

    const onSubmitHandle = (e) => {
        e.preventDefault();

        dispatch(createExercise(exerciseData))
    }

    return (
        <div className="container">
            <h1>Create exercise</h1>
            <form onSubmit={(e)=> onSubmitHandle(e)} >
                <div className="form-group">
                    <label>Username:</label>
                    <select id="username" required className="form-control" value={exerciseData.username} onChange={(e)=> setExerciseData({...exerciseData, username: e.target.value}) }>
                    <option></option>
                        {
                            users.map(user =>{
                                return <option 
                                    key={user.username + Math.round(Math.random() * 100)}
                                    value={user.username} >{user.username}
                                    </option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" id="description" rows="3" value={exerciseData.description} onChange={(e)=> setExerciseData({...exerciseData, description: e.target.value}) }></textarea>
                </div>
                <div className="form-group">
                    <label>Duration <span className="small">(minutes):</span></label>
                    <input type="number" className="form-control" id="duration" min="0" max="180" value={exerciseData.duration} onChange={(e)=>{setExerciseData({...exerciseData, duration: e.target.value})}} />
                </div>
                <div className="form-group">
                    <label>Date:</label><br/>
                    <DatePicker className="form-control" selected={exerciseData.date} onChange={(date)=>{setExerciseData({...exerciseData, date: date})}} />
                </div>
                <button className="btn btn-dark">Create an exercise</button>
            </form>
        </div>
    )
}
