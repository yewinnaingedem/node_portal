const express = require('express');
const dotenv = require('dotenv');
const router = require('./routes/testingRoute');
const cors = require('cors');
const morgan = require('morgan');
const app = express();
const colors = require('colors');
const { errorMiddleware } = require('./middlewares/errorMiddleware');
const checkApi = require('./middlewares/Auth') ;

app.use(cors());
app.use(morgan('dev'));
app.use(checkApi) ;
// app.use('/api/v1/test/' , router) ;
app.use('/api/v1/test', router)

// validation middleware 
app.use(errorMiddleware)

dotenv.config();

const port = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.status(200).send(`<h1>Project is successfully runing</h1>`)
})

app.listen(port, function (err, res) {
    if (err) return console.log('Creating sever ', err);
    console.log(`Sever is runing in ${process.env.DEV_MODE} at port : ${process.env.PORT} `.bgWhite.yellow)
});
