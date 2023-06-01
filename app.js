const express = require('express')
const app = express()
const port = 3000
const home = require("./routes/home")
app.set('view engine', 'ejs');

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.redirect("/home")
})

// مسار صفحة الهوم او الصفحة الرئيسية


app.use(home)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})