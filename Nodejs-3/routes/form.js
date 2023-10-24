const express = require("express");
const path = require("path");

const fileHtmlPath = path.join(process.cwd(), "views", "form.html")

const router = express.Router();
// /form/
router.get("/", (req, res) => {
res.render("form",{user:req.query.name || "ashraf"});
})

router.post("/submit", (req, res) => {
    res.send(req.body);
    })

module.exports = router;