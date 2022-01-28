//const http = require('http');
import express from 'express';
//below imports the routes
import router from './routes/index.js';
import path from 'path';
import { fileURLToPath } from 'url';



//set up the root directory reference 
// find the global URL using fileURLToPath
//and then turn that into the __dirname (something like User/Desktop/NGO_Redux/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log(__dirname);


const app = express();
const port = process.env.PORT || 3000;
//this is the address of the web app running on you localhost

app.use(express.static(path.join(__dirname, "public")));
// this is saying to look in the public directory/folder for our static pages 

//tell the app to use the router file 
//when ever it gets an incoming request it will re-route to our router file which will then parse the request and then respond back with resources
app.use('/', router);

app.listen(port, () => {
  console.log(`App running at ${port}/`);
});
//this is the minimum that you need to write a running node app