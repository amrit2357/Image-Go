const express = require('express');
const routes =  express.Router();
const app = require('../app');
const getImages = require('../controllers/getUploadImage');
const uploadRoute  = require('../controllers/uploadImage');
const path = require('path');

const multer = require('multer');
const sharp = require("sharp");



// ALl the basic routes goes through this
// Uplaod is the API Name
routes
    .get('/getImage' , (req, res)=>{
        //res.render('index')
    })
    .post('/uploadImage', (req, res)=>{
        console.log(req.files);
        console.log('Image Uploaded to the server');
        // image uploaded
        res.send(req.files)
    });

module.exports = routes;