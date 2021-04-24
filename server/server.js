const mongoose = require("mongoose")
const config = require("./config/mongoose.config")
const app = require("./app")

const PORT = process.env.PORT || 8080

let server
mongoose.connect(config.url, config.options).then(() => {
  console.log("Connected to database.")
  server = app.listen(PORT, () => {
    console.log(`Main server is listening on port ${PORT}.`)
  })
})

const exitHandler = async () => {
  await mongoose.connection.close()
  console.log("Disconnected from database.")
  if (server) {
    server.close(() => console.log("Server closed."))
  }
}

const exceptionHandler = (error) => {
  console.error(error)
  exitHandler()
}

process.on("uncaughtException", exceptionHandler)
process.on("unhandledRejection", exceptionHandler)
process.on("SIGINT", exitHandler)
