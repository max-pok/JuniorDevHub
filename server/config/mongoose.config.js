module.exports = {
  url: process.env.MONGO_DEVELOPMENT_URL,
  options: {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
}
