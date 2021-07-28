const express = require('express');
const routes =  express.Router();
const app = require('../app');
const getImages = require('../controllers/getUploadImage');
const uploadRoute  = require('../controllers/uploadImage');

// ALl the basic routes goes through this
// Uplaod is the API Name
routes
    .get('/getImage' , (req, res)=>{
        res.send('Get UploadImage');
    })
    .post('/uploadImage', (req, res)=>{
        res.send('Post Upload Image');
    });

module.exports = routes;