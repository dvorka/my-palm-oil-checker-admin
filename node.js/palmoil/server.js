var express = require('express');
var app = express();
var fs = require("fs");

app.get('/barcodes/:id', function (req, res) {
   fs.readFile( __dirname + "/" + "barcodes.json", 'utf8', function (err, data) {
       barcodes = JSON.parse( data );
       var barcode = barcodes[req.params.id]
       console.log( barcodes );
       console.log( barcodes.barcodes );
       console.log( barcodes["barcodes"] );
       console.log( barcodes["barcodes"][req.params.id] );

       if( barcodes["barcodes"][req.params.id] === undefined ) {
         res.status(404);
         res.end();
       } else {
         if( barcodes["barcodes"][req.params.id] ) {
           res.status(200);
           res.send('{ "contains-oil": true }');
         } else {
           res.status(200);
           res.send('{ "contains-oil": false }');
           //res.end( JSON.stringify(barcode));
         }
       }
   });
})

var server = app.listen(8081, function () {
  var host = server.address().address
  var port = server.address().port
  console.log("PalOil application listening at http://%s:%s", host, port)
})
