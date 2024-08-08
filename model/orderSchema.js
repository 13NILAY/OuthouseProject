const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    product: [
      {
        type: mongoose.Types.ObjectId,
        ref: "product"
      }
    ],
    size:{
        type:String
    },
    color: [
        {
          type: String,
        },
    ],
    Quantity:{
        type:Number,
        default:1
    },
    paymentStatus: {
      type: String,
      enum: ["pending", "completed", "cancelled", "refund"],
    //   required: true,
    },

    paymentType: {
      type: String,
      enum: ["cod", "card", "net banking", "UPI"],
    //   required: true,
    },
    orderStatus: {
      type: String,
      enum: ["received", "shipping", "shipped", "dispatched", "delivered"],
      default: "received",
    },
  },
  { timestamps: true }
);

const OrderSchema = mongoose.model("order", orderSchema);
module.exports = OrderSchema;