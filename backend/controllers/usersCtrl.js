const asyncHandler = require("express-async-handler");
const authModel = require('../models/authModel')

const allUsersctl = asyncHandler ( async (req,res)=> {
    const showUsers = await authModel.find()
     if(!showUsers){
        res.status(500)
        throw new Error('cant load users')
     }else{
        res.status(201)
        res.json(showUsers)
     }


})
const singleUserctl = asyncHandler ( async (req,res)=> {
    const singleUser = await authModel.findById(req.params.id)
    if(!singleUser){
       res.status(500)
       throw new Error('cant load users')
    }else{
       res.status(201)
       res.json(singleUser)
    }

})
const updateUserctl = asyncHandler ( async (req,res)=> {
    const updateUser = await authModel.findByIdAndUpdate(req.params.id, req.body, {new:true})
    if(!updateUser){
       res.status(500)
       throw new Error('cant load users')
    }else{
       res.status(201)
       res.json(updateUser)
    }

})
const deleteUserctl = asyncHandler ( async (req,res)=> {
    const deleteUser = await authModel.findByIdAndDelete(req.params.id)
    if(!deleteUser){
       res.status(500)
       throw new Error('cant load users')
    }else{
       res.status(201)
       res.json(deleteUser)
    }

})

module.exports = {
    allUsersctl ,
    singleUserctl,
    updateUserctl,
    deleteUserctl
}