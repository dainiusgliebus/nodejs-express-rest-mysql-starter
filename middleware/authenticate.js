const jwt = require('jsonwebtoken');
const ModalUser = require('../models/user');

const authenticate = (req, res, next) => {
    const authorization = req.headers['authorization'];
    if(authorization){        
        const token = authorization.replace('Bearer ','').replace('bearer ','');
        try {
            const decoded = jwt.verify(token, config.jwtSecret);
            if(decoded){
                
                return ModalUser.findById(decoded.sub, (err, response) => {
                    if(!err && response){
                        req.user = response;
                        return next();
                    }
                    return res.status(401).send({error: 'Unauthorized', message : 'Authentication failed (token).'});
                });
            }
        } catch (e) {
            
        }
        
    }
    
    return res.status(401).send({error: 'Unauthorized', message : 'Authentication failed (token).'});
}

module.exports = authenticate;
