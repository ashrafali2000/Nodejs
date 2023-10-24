const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const form = require("./routes/form")

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.static(path.join(process.cwd(), "public")))

// As a localStorage
app.set("name" , "ashraf");
app.get("name");
console.log(app.get("name"));

app.use((req, res, next) => {  //Auth midleware
    req.data = "Ashraf";
    next();
})

app.use("/form", form);

app.listen(3000);
