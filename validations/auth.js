const Joi = require('joi');

const loginParam = {
    body: {
        email: Joi.string().email({ minDomainAtoms: 2 }).required(),
        password: Joi.string().required()
    }
}

module.exports = { loginParam };