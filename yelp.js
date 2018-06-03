var request = require("request");
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

var options = { method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search',
  qs: { location: 'San%20Diego,%20California' },
  headers:
   { 'Postman-Token': 'e0c89375-f488-91a4-1926-ef4459c5f6a3',
     'Cache-Control': 'no-cache',
     Authorization: 'Bearer RQbERrUkla2cxdu2ZyEruJibUEQen-SpoUp4g4Yy139HfH6BxrhvlLJnZ42U58JjfVbbhhWT7ne_yd49H8dwaB_JU8mIl7IjXMfmht3EG3O4eWRt809wXiYjOhkTW3Yx' } };

var getName = function(){
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(JSON.parse(body).businesses[0].name);
});
};

var getAddress = function(){
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(JSON.parse(body).businesses[0].location.address1);
});
};

var getPrice = function(){
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(JSON.parse(body).businesses[0].price);
});
};

var getImgsrc = function(){
    request(options, function (error, response, body) {
      if (error) throw new Error(error);

      console.log(JSON.parse(body).businesses[0].image_url);
});
};


module.exports = {getName, getPrice, getImgsrc, getAddress}
