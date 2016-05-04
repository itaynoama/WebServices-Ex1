var express = require('express'); //starting the express server
var app = express(); //startup the app with express
var bodyParser = require('body-parser');

var College = require('./college');


var port = process.env.PORT || 3000; //process is global var


app.use(bodyParser.json()); //parsing application/json
app.use(bodyParser.urlencoded({extended:true}));

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
app.get('/allexcellentstudents', function(request,response){
    response.send(college.getAllExcellentStudents());
    response.end();
});

//Get specific student by ID
app.get('/student/:ID', function(request,response){
    var ID = request.params.ID;
    response.send(college.getStudentByID(ID));
    response.end();
});

//Get all excellent students by year
app.get('/studentyear/:year', function(request,response){
    var year = request.params.year;
    response.send(college.getAllStudentsByYear(year));
    response.end();
});


app.listen(port);