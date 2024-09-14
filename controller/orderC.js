const OrderSchema =require("../model/orderSchema");
require("dotenv").config();
const axios=require('axios');

const createOrder= async(req,res)=>{
    const { amount, currency } = req.body;
    console.log(req.body);
    const options = {
        amount: amount , // amount in the smallest currency unit
        currency,
    };

    try {
        const order = await axios.post('https://api.razorpay.com/v1/orders', options, {
            auth: {
                username: process.env.KeyId,
                password: process.env.KeySecret,
            },
        });
        // const productData = {
        //     name: req.body.name,
        //     description: req.body.description,
        //     categoryName: req.body.categoryName, // Corrected typo here
        //     size: req.body.sizes,
        //     cost: {
        //       currency: req.body.currency,
        //       value: req.body.value,
        //     },
        //     frontPicture:req.body.frontPicture,
        //     picture: req.body.picture,
        //     color: req.body.colors,
        //   };
        console.log(order);
        res.json({
            id: order.data.id,
            currency: order.data.currency,
            amount: order.data.amount,
        });
    } catch (error) {
        console.log(error)
        res.status(500).send(error.message);
    }
}

module.exports ={createOrder};