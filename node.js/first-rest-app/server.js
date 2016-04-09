var express = require('express');
var app = express();
var fs = require("fs");
var router = express.Router();

app.get('/listUsers', function (req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( __dirname );
       console.log( __dirname + "/" + "users.json" );
       console.log( data );
       res.end( data );
   });
})

router.get('/userlist', function(req, res) {
   fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
       console.log( data );
       res.end( data );
   });
});

module.exports = router;

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

})
