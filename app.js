const express = require("express")
const app = express()
const router = require('./routes/itemsRouter')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
app.use("/", router)

app.listen(3000, () => {
  console.log('Server running on port 3000');
});