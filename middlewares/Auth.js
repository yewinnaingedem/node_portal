const doenv = require('dotenv') ;
const checkApi = (req , res , next ) => {
    const apiSecret = req.headers['x-secret-key'] ;
    const x_secret_key = process.env.APP_API_KEY ;

    if(!apiSecret) {
        return res.status(400).json({error : "api secret key is missing"}) ;
    }
    if(x_secret_key !== apiSecret ) {
        return res.status(401).json({error : "Unauthorized: Invalid API secret key"}) ;
    }
    next() ;
}

module.exports = checkApi 