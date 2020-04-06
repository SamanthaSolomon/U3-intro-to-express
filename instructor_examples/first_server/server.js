const express = require("express");
const app = express();
// create our first route
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/somedata', (req, res) => {
    res.send('<h2>here is your info</h2>')
})
// configure server to listen on a port
app.listen(3000, () => {
    console.log('listening on port 3000')
})