import express from 'express'
import User from '../models/User.js'
import CryptoJS from 'crypto-js';
import jwt from 'jsonwebtoken';



const router = express.Router();
//register
router.post('/register', async (req,res)=>{
   
    try{
        const newUser = new User({
            username:req.body.username,
            email: req.body.email,
            password:  CryptoJS.AES.encrypt(req.body.password, process.env.KEY).toString(),
        });
        const saveUser =await newUser.save();
        res.status(201).json(saveUser);
    }catch(err){
        res.status(500).json(err)
    }
});


//login function 
router.post('/login', async(req,res)=>{
    try{
        const user= await User.findOne({username: req.body.username})
        !user && res.status(401).json("Wrong Credentials")
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.KEY);
        const originalpassword =hashedPassword.toString(CryptoJS.enc.Utf8);
        originalpassword !==req.body.password && res.status(401).json("Wrong Credentials");
                
        //json web token
         const token= jwt.sign({id:user._id, isAdmin: user.isAdmin, }, process.env.JWT,
            {expiresIn: "3d"});

        const {password, isAdmin, ...others} =user._doc;
        res.status(200).json({...others, token});
    }catch(err){
        res.status(500).json(err)
    }
    
})


export default router