let express = require('express');

let app = express();

let port = process.env.PORT || 3000;

app.listen(3000, function () {
    console.log("Server running on " + port);
});

app.get('/', function (req, res) {
    res.status(200);
    res.send("Api running");
});