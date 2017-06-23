// <========== CALL THE PACKAGES WE NEED ==========>
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

// <========== ROUTES FOR OUR API ==========>
var router = express.Router(); // get an instance of the express Router

// Sample route
router.get('/', function (req, res) {
    res.json({message: 'Welcome to our API!'});
});

// more routes here:

//<========== REGISTER OUR ROUTES ==========>
// all of our routes will be prefixed with /api
app.use('/api', router);

//<========== START THE SERVER ==========>
app.listen(port);
console.log('Server is running on port ' + port);