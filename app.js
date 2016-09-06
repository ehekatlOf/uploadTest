var express = require('express');
var path = require('path');
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function(req, file, callback) {
        callback(null, path.join(__dirname, "/uploads"));
    },
    filename: function(req, file, callback) {
        callback(null, Date.now().toString() + file.originalname);
    }
});
var upload = multer({ storage: storage }).single('uploadInput');
var app = express();

app.use(express.static('public'));

app.post('/uploads', function(req, res) {
    upload(req, res, function(err) {
        if (err) {
            return res.end("naw dawg");
        }
        res.end("iz good");
    });
});

app.listen(process.env.PORT, process.env.IP);