import express from 'express'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} from './verifyToken.js';
import CryptoJS from 'crypto-js';
import User from '../models/User.js';

const router = express.Router();

//update route for user
router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
    if(req.body.password){
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.KEY).toString();

    }try{
        const updatedUser =await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,

        }, {new:true})
            res.status(200).json(updatedUser);
    }catch(err){
        res.status(500).json(err)

    }
    })

// delete router for user

router.delete("/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try{
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("User has been deletes")
    }catch(err){
            res.status(500).json(err)
    }
})

// get router for user

router.get("/find/:id", verifyTokenAndAdmin, async(req,res)=>{
    try{
           const user = await User.findById(req.params.id)

           const {password, isAdmin, ...others} =user._doc;
           res.status(200).json(others);

    }catch(err){
        res.status(500).json(err);
    }
})

// get all router for user

router.get("/", verifyTokenAndAdmin, async(req,res)=>{
    const query= req.query.new
    try{
           const users = query ?  await User.find().sort({_id:-1}).limit(5) :await User.find()
           res.status(200).json(users);

    }catch(err){
        res.status(500).json(err);
    }
})

//get user stats
router.get('/stats', verifyTokenAndAdmin, async(req,res)=>{
    const date = new Date();
    const lasteYear = new Date(date.setFullYear(date.setFullYear()-1))

    try{
        const data = await User.aggregate([
            {$match: {createdAt : {$gte: lasteYear}}},
            {
                $project:{
                    month :{$month:"$createdAt"}
                }
            },
            {
                $group:{
                    _id: "$month",
                    total: {$sum:1}

                }
            }
        ]);
        res.status(200).json(data)

    }catch(err){
        res.status(500).json(err);
    }
})

export default router