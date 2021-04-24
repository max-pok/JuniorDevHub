const AuthService = require("../services/auth.service")
const { generateAuthToken } = require("../utils/token")
const authService = new AuthService()

/**
 * @Post
 */
const login = async (req, res) => {
  const user = await authService.findUser(req.body.email, req.body.password)
  if (!user) {
    res.status(400).send("No such user.")
  } else {
    const token = await generateAuthToken(user)
    res.send({ token, userId: user._id })
  }
}

const register = async (req, res, next) => {
  const { email, password, firstName, lastName, dob } = req.body
  try {
    const user = await authService.saveUser(email, password, firstName, lastName, dob)
    if (!user) {
      return res.status(409).send("Email already exists.")
    }
    const token = await generateAuthToken(user)
    return res.status(200).send({ token, userId: user._id })
  } catch (err) {
    next(err)
  }
}

module.exports = { login, register }
