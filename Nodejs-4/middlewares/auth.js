exports.varify = (req, res, next) => {
    if(req.headers.token){
       next()
    }else{
       res.send("Authentication failed");
    }
   }