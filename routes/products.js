const express = require('express');
const exphbs = require('express-handlebars');
const mongoose = require('mongoose');
// router added
const router = express.Router();

// connection moved from index.js
const dbURI = 'mongodb+srv://'+ process.env.DBUSER +':'+ process.env.DBPASSWD +''+ process.env.CLUSTER +'.mongodb.net/'+ process.env.DB +'?retryWrites=true&w=majority';
mongoose.connect(dbURI); // without error handling
const Product = require('../models/Product'); // added one . to go up one level

// routes moved from index.js and app. changed to router.
router.get('/', async (req, res) => {
    res.send('My MVC App');
})

router.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        res.render('index', {
            // Convert the product object to JSON for security reasons
            product: product.toJSON()
        });
    }
    catch (err) {
        res.status(404).json({
            msg: "not found"
        })
    }
});
// Export the router
module.exports = router;