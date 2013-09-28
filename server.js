var express = require('express');
var app = express();

app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(process.cwd() + '/'));
app.use(express.favicon());
app.use(express.cookieParser());
app.use(app.router);

app.listen(process.env.PORT || 5000);
