const User = require('../models/user.model');


exports.getAllUsers = async (req, res)=>{
    try {
        const users = await User.find()
        res.json(users)
    } catch (error) {
        res.status(404).json({error: error.message})
    }
}

exports.createUser = async (req, res)=>{
    const username = req.body.username
    const newUser = new User({username})

    try {
        await newUser.save()
        res.status(201).json(newUser)
    } catch (error) {
        res.status(409).json({error: error.message})
    }
}

