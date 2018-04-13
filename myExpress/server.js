var express = require('express')
var app = express()






app.use(express.static('public'))



app.set('view engine', 'pug')



app.get('/about_me', (req, res) => {
  res.render('about_me', {
    title: '關於我',
    guest: req.query.guest,
  })
})

app.listen(3000, () => {
  console.log('app listening on http://localhost:3000\n');
})
