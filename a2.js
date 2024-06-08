/*********************************************************************************
* WEB700 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Jayshivam Sanatbhai Bhatt | Seneca ID: jsbhatt1 (Student No.: 150464238) | Date: June 7, 2024
*
********************************************************************************/

const collegeData = require('./modules/collegeData');

collegeData.initialize()
    .then((message) => {
        console.log(message);

        // Test getAllStudents
        return collegeData.getAllStudents();
    })
    .then((students) => {
        console.log(`Successfully retrieved ${students.length} students`);

        // Test getCourses
        return collegeData.getCourses();
    })
    .then((courses) => {
        console.log(`Successfully retrieved ${courses.length} courses`);

        // Test getTAs
        return collegeData.getTAs();
    })
    .then((TAs) => {
        console.log(`Successfully retrieved ${TAs.length} TAs`);
    })
    .catch((err) => {
        console.error(err);
    });
