var express = require('express');
var app = express();
var proxy = require('express-http-proxy');



app.get('/', function (req, res) {
  res.send('Hello World, p');
});


app.use('/public',express.static('public'));

app.use('/proxy', proxy('localhost:3000', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.use('/aha', proxy('funny.aha.taipei', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));

app.use('/bluemix', proxy('joyce-cambrian.mybluemix.net', {
  forwardPath: function(req, res) {
    return require('url').parse(req.url).path;
  }
}));




app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});
