'use strict';
const express = require("express");
const app = express();
const PORT = 3000 
app.use(express.static('./public'));

app.get('/wassup', (request, response)=>{
    response.status(200).send('Wassup Ma Dude!');
});

app.get('/data', (request, response)=>{
    let company ={
        founded: Date.now(),
        startUp: true,
        boss: 'Student',
    };
    response.status(200).json(company);
})

app.use ('*', (request, response)=> response.send('Why are you running?'));

app.listen (PORT,()=>console.log(`Listening on port ${PORT}`));