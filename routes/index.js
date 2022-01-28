import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';


//set up the root directory reference 
// find the global URL using fileURLToPath
//and then turn that into the __dirname (something like User/Desktop/NGO_Redux/)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


router.get('/', (req, res) => {
    //res.send('Hello from Express amazing!')
    res.sendFile(path.join(__dirname, '../views/index.html'));
})
//this will grab the file from views/index.html

router.get('/Emily', (req,res) => {
    res.send(`This is joes page!`)
    //res.sendFile(path.join(__dirname, '../views/Emily.html'));
})

router.get('/Natasha', (req,res) => {
    res.send(`This is johns page!`)
    //res.sendFile(path.join(__dirname, '../views/Natasha.html'));
})

// very last router is your error handler - requests for resources that dont exist. example /popcorn has no route
router.use((req, res) =>{
    console.log('page does not exist');
    res.sendFile(path.join(__dirname, '../views/404.html'));
}) 

export default router;