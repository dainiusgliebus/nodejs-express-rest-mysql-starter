'user strict';

const { db_read } = require('../config/db');

// User object constructor
const User = data => {
    this.id = data.id;
    this.username = data.username;
    this.email = data.email;
    this.password = data.password;
    this.created_at = new Date();
    this.updated_at = new Date();
}

User.findById = function createUser(userId, result) {
    db_read.query("Select * from users where id = ?", userId, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        } else{
            result(null, res[0]);
        }
    });   
};

module.exports = User;
