const OrderSchema =require("../model/orderSchema");
require("dotenv").config();
const axios=require('axios');

const createOrder= async(req,res)=>{
    const { amount, currency } = req.body;

    const options = {
        amount: amount * 100, // amount in the smallest currency unit
        currency,
    };

    try {
        const order = await axios.post('https://api.razorpay.com/v1/orders', options, {
            auth: {
                username: razorpayKeyId,
                password: razorpayKeySecret,
            },
        });

        res.json({
            id: order.data.id,
            currency: order.data.currency,
            amount: order.data.amount,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

module.exports ={createOrder};