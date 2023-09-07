const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const form = require("./routes/form")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

app.use((req, res, next) => {  //Auth midleware
    req.data = "Ashraf";
    next();
})

app.use("/form", form);

app.listen(3000);
