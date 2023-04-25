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
// moved to routes\products.js

// Link to the routes folder
app.use('', require('./routes/products.js'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App listening to port ${PORT}`));

// Publish to HEROKU, cyclic or other hosting service