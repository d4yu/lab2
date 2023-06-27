var HTTP_PORT = process.env.PORT || 3000;



var express = require("express");

var app = express();

const server = app.listen(HTTP_PORT, () => {
    console.log(`Server running on port ${HTTP_PORT}`);
  });

app.get("/", (req, res) => {
    res.send("<html><head></head><body><h1>Hello World!</h1></body></html>");
  });
  
