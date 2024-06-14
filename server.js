/*********************************************************************************
*  WEB700 – Assignment 03
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  No part 
*  of this assignment has been copied manually or electronically from any other source 
*  (including 3rd party web sites) or distributed to other students.
* 
*  Name: Jayshivam Sanatbhai Bhatt | Student ID: 150464238 (Seneca ID: jsbhatt1) | Date: June 14, 2024
*
********************************************************************************/


var HTTP_PORT = process.env.PORT || 8080;
var express = require("express");
var app = express();
var path = require('path');
var collegeData = require('./modules/collegeData');

app.use(express.static('views'));       // Using static files from the 'views' folder

app.get('/students', (req, res) => {
    if (req.query.course) {
        collegeData.getStudentsByCourse(Number(req.query.course))
            .then(students => res.json(students))
            .catch(err => res.json({ message: "no results" }));
    } else {
        collegeData.getAllStudents()
            .then(students => res.json(students))
            .catch(err => res.json({ message: "no results" }));
    }
});

app.get('/tas', (req, res) => {
    collegeData.getTAs()
        .then(tas => res.json(tas))
        .catch(err => res.json({ message: "no results" }));
});

app.get('/courses', (req, res) => {
    collegeData.getCourses()
        .then(courses => res.json(courses))
        .catch(err => res.json({ message: "no results" }));
});

app.get('/student/:num', (req, res) => {
    collegeData.getStudentByNum(Number(req.params.num))
        .then(student => res.json(student))
        .catch(err => res.json({ message: "no results" }));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'about.html'));
});

app.get('/htmlDemo', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'htmlDemo.html'));
});

app.use((req, res) => {         // Handling the error
    res.status(404).send("Page Not THERE, Are you sure of the path?");
});

collegeData.initialize()        // Initializing the server
    .then(() => {
        app.listen(HTTP_PORT, ()=>{console.log("Server is running on port: " + HTTP_PORT);});
    })
    .catch(err => {
        console.error('Failed to initialize data:', err);
    });
