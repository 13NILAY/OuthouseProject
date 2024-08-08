const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    category: {
      type: String,
      required: true,
    },
    size: [
      {type:String}
    ],
    cost: {
      currency: {
        type: String,
        enum: ["USD", "INR", "EUR", "AUD"],
      },
      value: {
        type: Number,
      },
    },
    picture: {
      //secure_url of images
      type: String,
    },
      // text: {
      //   type: String,
      // },
    color: [
        {
          type: String,
        },
      ],
    
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;