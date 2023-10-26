const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

const form = require("./routes/form")
const todo = require("./routes/todo")
const auth = require("./routes/auth");
const { varify } = require("./middlewares/auth");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(express.static(path.join(process.cwd(), "public")))

// As a localStorage
app.set("view engine", "ejs");
app.set("views", "views")

app.use((req, res, next) => {  //Auth midleware
    req.data = "Ashraf";
    next();
})

app.use("/todo", varify, todo);
app.use("/form", form);
app.use("/auth", auth);

app.listen(3000);
