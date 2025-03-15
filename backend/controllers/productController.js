import asyncHandler from '../middlewave/asyncHandler.js';
import Prodcut from '../models/productModel.js';


const getProduct = asyncHandler(async(req,res) => {
    const products = await Prodcut.find({});
    res.json(products);
});


const getProductByID = asyncHandler(async(req,res) => {
    const product = await Prodcut.findById(req.params.id);
    if(product){
        return res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Resource not found');
    }
});


export{getProductByID, getProduct};