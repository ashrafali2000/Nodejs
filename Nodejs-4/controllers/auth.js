const { createUser } = require("../models/user");

exports.createUser = async (email, password) => {
  try {
    const userId = Date.now();
    await createUser(email, password, userId);
  } catch (err) {
    throw err;
  }
};
