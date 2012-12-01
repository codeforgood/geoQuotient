var express = require('express');
	places = require('./module/place/places');

var app = express();

app.configure(function () {
    app.use(express.logger('dev'));     /* 'default', 'short', 'tiny', 'dev' */
    app.use(express.bodyParser());
});

app.get('/', function(request, response) {
  response.send('Welcome to GeoQuotient! How good is your GeoQuotient?');
});
/*app.get('/places', places.findAll);*/

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("GeoQuotient Server Listening on " + port);
});