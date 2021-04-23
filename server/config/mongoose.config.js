const path = require("path")
require("dotenv").config({ path: path.join(__dirname, "../.env") })

module.exports = {
  url: process.env.MONGO_DEVELOPMENT_URL,
  options: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}
