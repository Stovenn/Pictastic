import React, {useState, useEffect} from 'react'
import axios from 'axios'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"


export default function EditExercise(props) {
    const [username, setUsername] = useState('')
    const [description, setDescription] = useState('')
    const [duration, setDuration] = useState(0)
    const [date, setDate] = useState(new Date())
    const [users, setUsers] = useState([])
    
    useEffect(() => {
        axios.get(`http://localhost:5000/exercises/${props.match.params.id}`)
            .then(res => {
                console.log(res.data)
                setUsername(res.data.username)
                setDescription(res.data.description)
                setDuration(res.data.duration)
                setDate(new Date(res.data.date))
            })
            .catch(err => console.log(err))

        axios.get('http://localhost:5000/users/')
            .then(res => {
                if(res.data.length > 0){
                    setUsers(res.data)
               }
            })
    }, [])

    function onSubmitHandle(e){
        e.preventDefault();
        const exercise = {
            username,
            description,
            duration,
            date
        }
        console.log(exercise)
        axios.post(`http://localhost:5000/exercises/update/${props.match.params.id}`, exercise)
            .then(res => console.log(res.data))
            .then(() => window.location = "/")
            .catch(err => console.log(err))
    }


    return (
        <div className="container">
            <h1>Edit exercise</h1>
            <form onSubmit={(e)=>{onSubmitHandle(e)}}>
                <div className="form-group">
                    <label>Username:</label>
                    <select id="username" required className="form-control" value={username} onChange={(e)=> setUsername(e.target.value) }>
                        {
                            users.map(user =>{
                                return <option 
                                    key={user.username}
                                    value={user.username} >{user.username}
                                    </option>
                            })
                        }
                    </select>
                </div>

                <div className="form-group">
                    <label>Description:</label>
                    <textarea className="form-control" id="description" rows="3" value={description} onChange={(e)=>{setDescription(e.target.value)}}></textarea>
                </div>
                <div className="form-group">
                    <label>Duration <span className="small">(minutes):</span></label>
                    <input type="number" className="form-control" id="duration" min="0" max="180" value={duration} onChange={(e)=>{setDuration(e.target.value)}} />
                </div>
                <div className="form-group">
                    <label>Date:</label><br/>
                    <DatePicker className="form-control" selected={date} onChange={(date)=>{setDate(date)}} />
                </div>
                <button className="btn btn-dark">Edit an exercise</button>
            </form>
        </div>
    )
}
