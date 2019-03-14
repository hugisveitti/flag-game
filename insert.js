var port = process.env.PORT || 8000;

var express = require('express');
var app = express();
var path = require('path');

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/index.html'));
})

app.use(express.static(__dirname + '/client'));


app.listen(port, () => {
    console.log("listening on port " + port);
});
