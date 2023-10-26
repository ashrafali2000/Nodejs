const { createUser, findUser } = require("../models/user");
const bcrypt = require('bcrypt');
exports.createUser = async (email, password) => {
  try {
    const userId = Date.now();
    const hashPassword = await bcrypt.hash(password, 12)
    return await createUser(email, hashPassword, userId);
  } catch (err) {
    throw err;
  }
};
exports.login = async (email, password) => {
  try {
    const user = await findUser(email);
    const result =  await bcrypt.compare(password, !!user && user.password);
    if(result){
        return "login sucessfull"
    }
    return "wrong email id or Password"
  } catch (err) {
    throw err;
  }
};
