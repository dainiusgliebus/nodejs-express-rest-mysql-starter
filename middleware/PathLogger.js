const pathLogger = (req, res, next) => {
    console.log('logging: %s %s %s', req.method, req.url, req.path);
    next();
}

module.exports = pathLogger;
