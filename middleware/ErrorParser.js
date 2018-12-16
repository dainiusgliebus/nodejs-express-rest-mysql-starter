const errorParser = (err, req, res, next) => {
    next(err);
    if (err) {
        const status = err.status ? err.status : 400;
        
        const errorResponse = {
            error: "error",
            message: err.message,
        };
        
        if(err.errors){
            const errors = err.errors.map(e => e.messages);
            errorResponse['errors'] = errors;
        }
        
        return res.status(status).send(errorResponse);
    } else {
        return next(err); // let subsequent error handlers or connect handle
    }
}

module.exports = errorParser;
