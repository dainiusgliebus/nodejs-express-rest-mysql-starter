const jwt = require('jsonwebtoken')

const authorize = (req, res, next) => {
    console.log('middleware[authenticate]');
    const authorization = req.headers['authorization'];
    if(authorization){        
        const token = authorization.replace('Bearer ','').replace('bearer ','');
        try {
            const decoded = jwt.verify(token, config.jwtSecret);
            if(decoded){
                return next();
            }
        } catch (e) {
            
        }
        
    }
    
    return res.status(401).send({error: 'Unauthorized', message : 'Authentication failed (token).'});
}

module.exports = authorize;
