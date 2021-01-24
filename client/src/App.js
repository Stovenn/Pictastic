import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "bootstrap/dist/css/bootstrap.min.css";

import { getExercises } from "./actions/exercises";
import { getUsers } from "./actions/users";

import Navbar from './components/shared/Navbar';
import ExercisesList from './components/ExercisesList';
import EditExercise from './components/EditExercise';
import CreateExercise from './components/CreateExercise';
import CreateUser from './components/CreateUser';

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getExercises())
    dispatch(getUsers())
  }, [dispatch])

  return (
    <Router>
    <div className="container">
      <Navbar />
      <br />
      <Route path="/" exact component={ExercisesList}/>
      <Route path="/edit/:id" component={EditExercise}/>
      <Route path="/create" component={CreateExercise}/>
      <Route path="/user" component={CreateUser}/>
    </div>
      
    </Router>
  );
}

export default App;
