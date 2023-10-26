const { SECRETE_KEY } = require("../data/key");
const jwt = require('jsonwebtoken');
exports.varify = (req, res, next) => {
       jwt.verify(req.headers.token, SECRETE_KEY,function(err, decoded) {
      if(err){
         return res.send("Authentication failed")
      }
      req.user = decoded.email
      next()
    });
   }