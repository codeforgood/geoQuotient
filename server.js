var express = require('express');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/', function(request, response) {
  response.send('Welcome to GeoQuotient! How good is your GeoQuotient?');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("GeoQuotient Server Listening on " + port);
});