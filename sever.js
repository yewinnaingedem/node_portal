const express = require('express');
const dotenv = require('dotenv') ;
const {connectDB} = require('./config/db')
const router = require('./routes/testingRoute') ;

const app = express() ;

// app.use('/api/v1/test/' , router) ;
app.use('/api/v1/test' , router )

dotenv.config() ;

const port = process.env.PORT || 8080                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ;


connectDB() ;

app.get('/' , (req , res ) => {
    res.status(200).send(`<h1>Project is successfully runing</h1>`)
})

app.listen(port , function (err , res ) {
if(err) return console.log('Creating sever ' , err ) ;
console.log(`Sever is runing in ${process.env.DEV_MODE } at port : ${process.env.PORT} ` ) }) ;
