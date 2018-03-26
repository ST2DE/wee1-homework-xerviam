var express = require('express')
var app = express()

app.get('/about_me', (req, res) => {
  res.send('hello')
})

app.listen(3000, () => {
  console.log('app listening on http://localhost:3000\n');
})
