const express = require("express");
const { addTodo, getAllTodos } = require("../controllers/todo");
const router = express.Router();

router.get("/", (req, res) => {
    res.send(getAllTodos());
})

router.post("/add", (req, res) => {
    addTodo(req.body.data);
    res.send("Todo added");
})


module.exports = router