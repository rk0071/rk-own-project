var express = require('express');
var hbs = require('hbs');
const port = process.env.PORT || 3000;
var app = express();
app.set('vgvg','hbs');
hbs.registerPartials(__dirname + '/views/partials' );
//app.use(express.static(__dirname + '/tool'));

app.get('/about',(req,res) => {
  res.render('er.hbs',
    {
      name : 'rk',
      write : 'hi'
    });

});
app.get('/about1',(req,res) => {
  res.render('jh.hbs',
    {
      name : 'rk',
      write : 'hi'
    });

});
app.listen(port,() =>
{
  console.log(`odd ${port}`);
})
