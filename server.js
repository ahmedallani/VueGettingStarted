var express = require('express');
var app = express();

app.use(express.static('dist'));
app.get('/api', function(req, res){
   res.send("Hello world!");
});

app.listen(3000);