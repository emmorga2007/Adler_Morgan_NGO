//const http = require('http');
import express from 'express';

const app = express();
const port = process.env.PORT || 3000;
//this is the address of the web app running on you localhost

app.get('/', (req, res) => {
    res.send('Hello from Express amazing!')
})
// req is "request", res is "respond".
// the / at the begining is what ever comes after the port address. ex: localhost:3000/...
//so above it is saying when there is nothing after the /, display the homepage. 

app.get('/joe', (req,res) => {
    res.send(`This is joes page!`)
})

app.get('/john', (req,res) => {
    res.send(`This is johns page!`)
})

app.listen(port, () => {
  console.log(`App running at ${port}/`);
});
//this is the minimum that you need to write a running node app