const { User } = require('../db');


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({ 
        username,         //we can use async function too
        password
    })
    .then(function(value) {
        if(value){
            next();
        }else{
            res.json({
                msg:"User doesnot exist!"
            })
        }

    });
}

module.exports = userMiddleware;