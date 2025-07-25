const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
   const username = req.headers.username;
   const password = req.headers.password;

   Admin.findOne({
    username,
    password
   })
   .then(function(value) {
    if(value){
        next();
    }else{
        res.json({
            msg:"Admin doesnot exist!"
        })
    }

   });
}

module.exports = adminMiddleware;