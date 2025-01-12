const express = require('express');

const port = 8080 ;
const app = express() ;

app.listen(port , function (err , res ) {
if(err) return console.log('Creating sever ' , err ) ;
console.log('Sever is runing at port : ' , port ) }) ;
