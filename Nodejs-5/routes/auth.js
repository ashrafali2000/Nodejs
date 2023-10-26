const express = require("express");
const { createUser, login } = require("../controllers/auth");
const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const response = await login( req.body.email, req.body.password);
    res.status(200).send(response);
  } catch (err) {
    res.send(err);
  }
});

router.post("/signup", async (req, res) => {
  try {
    const {firstName, lastName, email, password} = req.body
    const response = await createUser(firstName, lastName, email, password);
    res.status(200).send(response);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
