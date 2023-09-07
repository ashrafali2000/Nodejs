const express = require("express");
const app = express();

app.use((req, res, next) => {  //Auth midleware
    // console.log(req.url);
    req.data = "Ashraf";
 next();
})

app.use((req, res, next) => {
 res.send(req.data)
})

app.listen(3000);
