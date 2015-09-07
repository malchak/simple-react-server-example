var express = require('express'),
		exphbs = require('express-handlebars'),
		http = require('http'),
		routes = require('./routes');


var app = express();
var port = process.env.PORT || 8080

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.disable('etag');

app.get('/', routes.index);

app.use('/', express.static(__dirname + "/public/"));

var server = http.createServer(app).listen(port, function() {
	console.log('React app listening on port ' + port);
});