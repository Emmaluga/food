const express = require('express')
const {allUsersctl,singleUserctl,updateUserctl,deleteUserctl} = require('../controllers/usersCtrl')
const {authenticateUser, adminAuth } = require('../middleware/authMiddleware')
const userRoute = express()




 userRoute.get('/show/users', authenticateUser, adminAuth,  allUsersctl)
 userRoute.get('/single/user/:id', authenticateUser, adminAuth,  singleUserctl)
 userRoute.put('/update/user/:id', authenticateUser, adminAuth,  updateUserctl)
 userRoute.delete('/delete/user/:id', authenticateUser, adminAuth, deleteUserctl)


module.exports = userRoute