const mongoose = require("mongoose")
const config = require("./config/mongoose.config")
const app = require("./app")

const PORT = process.env.PORT || 8080

mongoose.connect(config.url, config.options).then(() => {
  console.log("Connected to database.")

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}.`)
  })
})
