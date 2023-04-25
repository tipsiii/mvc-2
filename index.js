const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
// .env file to store sensitive data. Add to .gitignore!! 
require('dotenv').config();

const app = express();

app.engine('handlebars', exphbs.engine({
    defaultLayout: 'main'
}));

app.set('view engine', 'handlebars');

// Connect to MongoDB Atlas database. Note the use of .env variables here. 
const dbURI = 'mongodb+srv://'+ process.env.DBUSER +':'+ process.env.DBPASSWD +''+ process.env.CLUSTER +'.mongodb.net/'+ process.env.DB +'?retryWrites=true&w=majority'
 
mongoose.connect(dbURI); // without error handling

const Product = require('./models/Product');

app.get('/', async (req,res) => {
    res.send('My MVC App');
})

app.get('/products/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);     
        res.render('index', {
            // Convert the product object to JSON for security reasons
            product : product.toJSON()
        });
    }
    catch(err) {
        res.status(404).json({
            msg: "not found"
        })   
    }  
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));