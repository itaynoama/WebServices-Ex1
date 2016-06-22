var express = require('express'); //starting the express server
var app = express(); //startup the app with express
var bodyParser = require('body-parser');

var College = require('./college');


var port = process.env.PORT || 3000; //process is global var

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//app.use(bodyParser.json()); //parsing application/json
//app.use(bodyParser.urlencoded({extended:true}));

app.use('/assets', express.static(__dirname + 'public'));


//Manager - new College
var college = new College();

//HomePage
app.get('/', function(request,response) {
      response.send('<!doctype html><html><head></head><body style="background:#e5e5e5; text-align:center;"><h1 style="color:red" >Welcome - Shenkar Excellent Students</h1></body></html>');
});


//All the request 
app.all('*', function(request,response,next) {
    request.next();
});


//Get all excellent students
app.get('/allexcellentstudents', function(request,response,value){
    college.getAllExcellentStudents(function(data){
      response.json(data);  
    });
});

//Get specific student by ID
app.get('/student/:ID', function(request,response,value){
    var ID = request.params.ID;
    college.getStudentByID(ID, function(data){
      response.json(data);   
    });
});

//Get all excellent students by year
app.get('/studentyear/:year', function(request,response,value){
    var year = request.params.year;
    college.getAllStudentsByYear(year, function(data){
      response.json(data);   
    });
});


app.listen(port);
