const axios = require('axios');

const baseUrl = 'http://localhost:5000'

exports.fetchExercises = () => axios.get(baseUrl+'/exercises')
exports.createExercise = (newExercise) => axios.post(baseUrl+'/exercises/add', newExercise)

exports.fetchUsers = () => axios.get(baseUrl+'/users')