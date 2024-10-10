const express = require('express');
const User = require('../models/user');
const router = express.Router();
router.post('/register', async(req, res)=>{
    const {  email, password } = req.body;


    try{
        const newUser = new User({ username, email, password, phonenumber,Address});
        await newUser.save();
        res.status(201).json({ message: 'user registered successfully'});
    }
        catch (error){
            res.status(500).json({ error: error.message});
        }



});
router.post('/login', async(req, res)=>{
  const { email, password}= req.body;

  try{
    const user = await User.findOne({email});
    if (!user) {
        return res.status(404).json({message: 'User not found'})
    }
    if (user.password !== password){
        return res.status(400).json({message: 'Invalid credentials'});
    }
    
    res.json({message: 'Login successfull', user});
  }
    catch(error){
    res.status(500).json({error: error.message});
  }

})
module.exports = router;
