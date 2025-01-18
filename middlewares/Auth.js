const doenv = require('dotenv') ;
doenv.config();
const checkApi = (req , res , next ) => {
    const apiSecret = req.headers['authorization'] ;
    const x_secret_key = process.env.APP_API_KEY ;

    if(!apiSecret) {
        return res.status(400).json({error : "api secret key is missing"}) ;
    }
    if(x_secret_key !== apiSecret ) {
        return res.status(401).json({error : "Unauthorized: Invalid API secret key"}) ;
    }
    return next() 
}

module.exports = checkApi 