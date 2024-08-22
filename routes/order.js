const express=require('express');
const router =express.Router();

const orderC =require("../controller/orderC");

router.post('/create-order',orderC.createOrder);

module.exports= router;