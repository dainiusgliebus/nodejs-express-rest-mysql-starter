require('dotenv').config();

var env = process.env.NODE_ENV || 'development';


config = {
    // App env
    env: process.env.NODE_ENV,
    
    // App debug mode
    debug: process.env.DEBUG ? process.env.DEBUG === 'true' : true,
    
    // App secret for password encoding
    appSecret: process.env.APP_SECRET || "itsverysecret",

    // Server port
    port: process.env.SERVER_PORT || 3000,
    
    // JWT secret
    jwtSecret: process.env.JWT_SECRET || "itsverysecret",
    
    // JWT expire time in seconds
    jwtExpire: parseInt(process.env.JWT_EXPIRE, 10) || 3600,
}


module.exports = config;