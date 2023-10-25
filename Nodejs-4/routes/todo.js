const express = require("express");
const { addTodo, getAllTodos } = require("../controllers/todo");
const router = express.Router();

router.get("/", (req, res) => {
    // in the bellow the first argument ("todo") is represent the todo.ejs file
    res.render("todo",{todos: getAllTodos()});
})

router.post("/add", (req, res) => {
    addTodo(req.body.data);
    res.send("Todo added");
})


module.exports = router