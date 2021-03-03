const express = require('express');
const path = require('path');

const app = express();

let server_port = process.env.YOUR_PORT||process.env.PORT || 4000;
let server_host = process.env.YOUR_HOST || '0.0.0.0';


app.get('/',(req,res)=>{
    
    res.sendFile(path.resolve(__dirname,'index.html'));
})

app.get('/data',(req,res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');
    res.sendFile(path.resolve(__dirname,'data','data.json'));
})

app.listen(server_port,server_host,()=>{
    console.log('Server start working on PORT:',server_port);
})