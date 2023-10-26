const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { createUser, findUser } = require("../models/user");
const { SECRETE_KEY } = require('../data/key');

exports.createUser = async (firstName, lastName, email, password) => {
  try {
    const userId = Date.now();
    const hashPassword = await bcrypt.hash(password, 12)
    return await createUser(firstName, lastName, email, hashPassword, userId);
  } catch (err) {
    throw err;
  }
};
exports.login = async (email, password) => {
  try {
    const user = await findUser(email);
    const result =  await bcrypt.compare(password, !!user && user.password);
    if(result){
        const token = jwt.sign({ email },SECRETE_KEY, { expiresIn: '1h' } );
        return {token};
        // return "login sucessfull"
    }
    return "wrong email id or Password"
  } catch (err) {
    throw err;
  }
};
