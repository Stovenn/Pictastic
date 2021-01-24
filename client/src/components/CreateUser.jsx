import React, {useState} from 'react'
import axios from 'axios'

export default function CreateUser() {

    const [username, setUsername] = useState('')

    function onSubmitHandle(e){
        e.preventDefault();
        const user = {
            username,
        }
        console.log(user)
        setUsername("")
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data))
    }

    return (
        <div className="container">
            <h1>Create user</h1>
            <form onSubmit={(e)=>{onSubmitHandle(e)}}>
                <div className="form-group">
                    <label>Username </label>
                    <input type="text" className="form-control" id="username" value={username} onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <button className="btn btn-dark">Create user</button>
            </form>
        </div>
    )
}
