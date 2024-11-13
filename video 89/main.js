const express = require('express')
const app = express()
const port = 3000

app.use(express.static("public"))

app.get('/', (req, res) => {
    console.log("Hei,its a get request");
    res.send('Hello World 29!')
}).post('/', (req, res) => {
    console.log("Hei,its a post request")
    res.send('Hello World post !')
}).put('/', (req, res) => {
    console.log("Hei,its a put request")
    res.send('Hello World put !')
})
app.get("/index", (req, res) => {
    console.log("Hei,its index")
    res.sendFile('templates/index.html', { root: __dirname })
})
app.get("/api", (req, res) => {
    res.json({ a: 1, b: 2, c: 3, d: 4 })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})