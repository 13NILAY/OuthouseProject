const express =require("express");
const router=express.Router();
const adminC=require("../controller/adminC");

// routes

//AddProductDetails
router.post("/addProduct",adminC.addProduct);

//AddProductImage
router.post("/addProductImages",adminC.addImagesForProduct);

module.exports =router;
