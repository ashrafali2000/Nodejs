const express = require("express");
const { createUser } = require("../controllers/auth");
const router = express.Router();

router.post("/login", (req, res) => {
    
})

router.post("/signup", async(req, res) => {
    try{
        await createUser(req.body.email, req.body.password);
        res.status(200).send("user sucessfully created")
    }catch(err){
res.send(err)
    }
})


module.exports = router