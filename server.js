var express = require('express');
var app = express();


app.get('/api', function(req, res){
   res.send("Hello world!");
});
app.use(require('connect-history-api-fallback')()) 
app.use(express.static('dist'));
app.listen(3000);