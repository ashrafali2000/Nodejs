const express = require("express");
const path = require("path");
// const fs = require("fs");
const fileHtmlPath = path.join(process.cwd(), "views", "form.html")

const router = express.Router();
// /form/
router.get("/", (req, res) => {
res.sendFile(fileHtmlPath);
})

router.post("/submit", (req, res) => {
    res.send(req.body);
    })

module.exports = router;