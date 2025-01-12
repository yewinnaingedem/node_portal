const mongoose = require('mongoose') ;
const dotenv = require('dotenv') ;
dotenv.config() ;
const url = process.env.MON_LOCALE_URL + process.env.DB_NAME 

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(url) ;
        
        console.log('Database connected successfully to host:', connection.connection.host);
    } catch (error) {
        console.log('Database connection error : ' , error) ;
    }
}

module.exports = {connectDB}