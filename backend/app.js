const express = require('express');

const mongoose = require('mongoose');

const mongooseUniquevaliator = require('mongoose-unique-validator')

require("dotenv").config();

const userRoutes = require('./routes/users');

const userRoute = require('./routes/user');

const stuffRoutes = require('./routes/stuff');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  next();
});

app.use(express.json());

app.use ('/api/stuff/', stuffRoutes)

app.use('/users' , userRoutes);

app.use('/api/auth' , userRoute);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('Connexion à MongoDB réussie !')
  })
  .catch(err => console.log('erreur de connexion !'));

module.exports = app;