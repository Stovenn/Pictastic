const Exercice = require( "../models/exercise.model");


exports.getExercises = async (req, res) => {
    try {
        const exercisesList = await Exercice.find()
        res.status(200).json(exercisesList)
    } catch(error) {
        res.status(404).json({error: error.message})
    }
}

exports.getOneExercise = async (req, res)=>{
    try {
        const exercise = await Exercice.findById(req.params.id)
        res.json(exercise)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

exports.createExercise = async (req, res)=> {
    const exercise = req.body
    console.log(req.body)

    const newExercise = new Exercice(exercise)

    try {
        await newExercise.save()
        res.status(201).json(newExercise)
    } catch(error) {
        res.status(409).json({error: error.message})
    }
}

exports.editExercise = async(req, res)=>{
    try {
        const exercise = await Exercice.findById(req.params.id)

        exercise.username = req.body.username
        exercise.description = req.body.description
        exercise.duration = Number(req.body.duration)
        exercise.date = Date.parse(req.body.date) 

        await exercise.save()
        res.json(exercise)
        
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}



exports.deleteExercise = async (req, res)=>{
    try {
        await Exercice.findByIdAndDelete(req.params.id, (err, exercise)=>{
            if(!err && exercise){
                res.status(200).json({message: 'successfully deleted'})
            }else if (!exercise){
                res.status(404).json({error: 'not found'})
            }
        })
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}