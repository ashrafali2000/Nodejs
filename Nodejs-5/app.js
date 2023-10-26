const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require('cors')
const app = express();

const form = require("./routes/form");
const todo = require("./routes/todo");
const auth = require("./routes/auth");
const products = require("./routes/products");
const { varify } = require("./middlewares/auth");

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())
app.use(cors())
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
app.use("/signup/auth", auth);
app.use("/products", products);

app.listen(8000);
