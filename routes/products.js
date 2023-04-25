const express = require('express');
// router added
const router = express.Router();
// link to the controller
const productsController = require('../controllers/products.js');

// routes moved from index.js and app. changed to router.
// router directs to controller fuction 
router.get('/', productsController.home);
router.get('/products/:id', productsController.getProduct);

// Export the router
module.exports = router;