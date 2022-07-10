require('dotenv').config()
const app = require('./bin/server')

app.listen(process.env.PORT, () => {
  console.log(`${process.env.APP_NAME} app listening at http://localhost:${process.env.PORT}`)
})
