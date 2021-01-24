const router = require('express').Router()
const {getAllUsers, createUser} = require('../controllers/users')


router.get('/', getAllUsers)

router.post('/add', createUser)


module.exports = router;