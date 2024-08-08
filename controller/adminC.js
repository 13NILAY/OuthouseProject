const user=require("../model/user");
const cloudinary=require("cloudinary").v2;
const ProductSchema= require("../model/productSchema");
const OrderSchema =require("../model/orderSchema");
const upload = require('../middleware/multer'); 

const mongoose=require("mongoose");
require("dotenv").config();
const fs= require("fs");

//add Products

const addProduct = async (req, res) => {
  try {
    console.log(req.body);
    // Ensure all required fields are provided and correctly named
    const productData = {
      name: req.body.formData.name,
      description: req.body.formData.description,
      category: req.body.formData.category, // Corrected typo here
      size: req.body.formData.sizes,
      cost: {
        currency: req.body.formData.currency,
        value: req.body.formData.value,
      },
      picture: req.body.formData.picture,
      color: req.body.formData.colors,
    };

    // Log the incoming product data for debugging purposes
    // console.log('Received product data:', productData);

    // Create a new product instance with the validated data
    const product = new ProductSchema(productData);

    // Save the product to the database
    const savedProduct = await product.save();

    // Respond with the saved product data
    res.status(201).json({
      success: true,
      message: 'New Product added',
      product: savedProduct,
    });
  } catch (err) {
    // Log the error and respond with an error message
    console.error('Error adding product:', err);
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

const addImagesForProduct = (req, res) => {
  upload.single('photo')(req, res, async (err) => {
    // console.log(req.body);
    if (err) {
      console.error('Error during file upload:', err);
      return res.status(500).json({ message: 'Internal Server Error', error: err.message });
    }

    if (req.file) {
      try {
        const result = await cloudinary.uploader.upload(req.file.path);
        // console.log('Uploaded file:', result);

        // Assuming you're storing the URL in the product document
        // await ProductSchema.findByIdAndUpdate(req.body.productId, { image: result.secure_url });

        res.status(200).json({
          success: true,
          message: 'File uploaded successfully',
          fileUrl: result.secure_url,
        });
      } catch (uploadError) {
        console.error('Cloudinary upload error:', uploadError);
        res.status(500).json({ message: 'File upload failed', error: uploadError.message });
      }
    } else {
      console.error('File upload failed');
      res.status(400).json({ message: 'File upload failed' });
    }
  });
};

module.exports = {
  addProduct,addImagesForProduct
};
 
