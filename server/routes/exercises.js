const router = require('express').Router();
const { getExercises, getOneExercise, createExercise, editExercise, deleteExercise } = require( '../controllers/exercises');


//Get all exercise
router.get('/', getExercises)

//Get one exercise
router.get('/:id', getOneExercise)

//Create one exercise
router.post('/add', createExercise)

//Update one exercise
router.post('/update/:id', editExercise)

//Delete one exercise
router.delete('/:id', deleteExercise )


module.exports = router;