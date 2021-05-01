const User = require("../models/user.model")
const UserFile = require("../models/file.model")
const mongoose = require("mongoose")

class UserService {
  constructor() {}

  async getUserInformation(userId) {
    if (mongoose.Types.ObjectId.isValid(userId)) {
      const user = await User.findById(userId)
      return user
    }
    return null
  }
}

module.exports = UserService
