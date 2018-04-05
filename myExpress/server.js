var express = require('express')
var app = express()

app.set('view engine', 'ejs')

app.get('/about_me', (req, res) => {
  var guestAge = req.query.age
  res.render('about_me', {
    title: '關於我',
    guest: req.query.guest,
  })
})

app.listen(3000, () => {
  console.log('app listening on http://localhost:3000\n');
})
