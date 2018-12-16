const config = require('../config/app');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const {db_read} = require('../config/db');
const SHA512 = require('crypto-js/sha512');
const Password = require("node-php-password");

/**
* Returns jwt token if valid email and password is provided
* @param req
* @param res
* @param next
* @returns {*}
*/
function me(req, res) {
    
    res.send({user: 'TODO');
    /*
    db_read.query('SELECT id, email, password FROM user where email = ? limit 1', [req.body.email], (err, response, fields) => {
        if(!err && response.length === 1){
            const user = response[0];
            
            if(!Password.verify(req.body.password, user.password)){
                res.status(401).send({error: 'Unauthorized', message : 'Authentication failed'});
            } else {

                const sign = {
                    exp: Math.floor(Date.now() / 1000) + config.jwtExpire, // expire time
                    sub: user.id,                                          // Identifies the subject of the JWT.
                };
                
                res.json({
                    message: "success",
                    data: jwt.sign(sign, config.jwtSecret)
                });
            }
            
        }else {
            res.status(401).send({error: 'Unauthorized', message : 'Authentication failed'});
        }
    });
    */
    
}

module.exports = { me };