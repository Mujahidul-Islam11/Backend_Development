const express = require('express')
const app = express()
const port = 5000
const item = require("./routes/item");

app.use("/api", item);

app.listen(port, () => {
  console.log(`Dinar's app listening on port ${port}`)
})