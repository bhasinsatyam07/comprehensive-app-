import express from 'express'
import { verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} from './verifyToken.js';
import Cart from '../models/Cart.js'
const router = express.Router();

// CREATE PRODUCTS
router.post("/", verifyToken, async(req,res)=>{
    const newCart = new Cart(req.body)
    try{
        const savedCart = await newCart.save();
        res.status(200).json(savedCart)
    }catch(err){
        res.status(500).json(err)
    }
})

//update route for Product
router.put("/:id",verifyTokenAndAuthorization, async(req,res)=>{
    
    try{
        const updatedCart =await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,

        }, {new:true})
            res.status(200).json(updatedCart);
    }catch(err){
        res.status(500).json(err)
    }
    })

// delete user cart

router.delete("/:id", verifyTokenAndAuthorization, async(req,res)=>{
    try{
            await Cart.findByIdAndDelete(req.params.id)
            res.status(200).json("Cart has been deletes")
    }catch(err){
            res.status(500).json(err)
    }
})

// get user Cart

router.get("/find/:userId", verifyTokenAndAuthorization, async(req,res)=>{
    try{
           const cart = await Cart.findOne({userId: req.params.userId})
           res.status(200).json(cart);

    }catch(err){
        res.status(500).json(err);
    }
})

// get all router for Products
    router.get("/", verifyTokenAndAdmin, async(req,res)=>{
        try{
            const carts =await Cart.find()
            res.status(200).json(carts)
        }catch(err){
            res.status(500).json(err)
        }
    })

export default router