// write down all the dependencies and npm modules
/*
 all the important node packages to install
 nodemon date-fns aws-sdk nodemailer body-parser eslint express socket.io validator jsonwebtoken bcrypt uuid fs-extra mocha jest winston dotenv minimist chalk passport mongoose mongodb
  debug moment axios babel-runtime redis morgan less mysql joi cors commander prompt prettier md5  sequelize crypto multer
  sqlite3 helmet oauth pm2 yup UglifyJS2 Cheerio morgan Restify sharp gm cloudinary concurrently inquirer pdfkit csv
 */

  
/// ****** Create the server using native http module

// const http = require('http')
// http.createServer((req, res) => {
//     console.log('Server is running on port 3000'); 
// }).listen(8080);


/***     Create the server using express framework        ****/
/*
 * Module dependencies.
 */
const express = require('express');
const bodyparser = require('body-parser');
const app = express();
const routes = require('./routes/routes');

app.set('port', process.env.port || 3000);
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({ extended : true }));

app.use('/' , routes);
app.listen(3000, () => {
    console.log(`server is running on ${app.get('port')}`);
});

module.exports = {
    app,
    express
};




