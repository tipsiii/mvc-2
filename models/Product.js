const mongoose = require('mongoose'); 

const productSchema = new mongoose.Schema({ 
    name: String, 
    price: Number
}); 
// Export the model as Product
module.exports = mongoose.model("Product", productSchema); 