const fs = require('fs');
const path = require('path');

class Data {
    constructor(students, courses) {
        this.students = students;
        this.courses = courses;
    }
}

let dataCollection = null;

function initialize() {
    return new Promise((resolve, reject) => {
        fs.readFile(path.join(__dirname, '../data/students.json'), 'utf8', (err, studentsData) => {
            if (err) {
                reject('Unable to read students file');
                return;
            }

            fs.readFile(path.join(__dirname, '../data/courses.json'), 'utf8', (err, coursesData) => {
                if (err) {
                    reject('Unable to read courses file');
                    return;
                }

                const students = JSON.parse(studentsData);
                const courses = JSON.parse(coursesData);

                dataCollection = new Data(students, courses);
                resolve('Data successfully initialized');
            });
        });
    });
}

function getAllStudents() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students) {
            if (dataCollection.students.length > 0) {
                resolve(dataCollection.students);
            } else {
                reject('No results returned');
            }
        } else {
            reject('No students data found');
        }
    });
}

function getTAs() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.students) {
            const TAs = dataCollection.students.filter(student => student.TA);
            if (TAs.length > 0) {
                resolve(TAs);
            } else {
                reject('No results returned');
            }
        } else {
            reject('No students data found');
        }
    });
}

function getCourses() {
    return new Promise((resolve, reject) => {
        if (dataCollection && dataCollection.courses) {
            if (dataCollection.courses.length > 0) {
                resolve(dataCollection.courses);
            } else {
                reject('No results returned');
            }
        } else {
            reject('No courses data found');
        }
    });
}

module.exports = {
    initialize,
    getAllStudents,
    getTAs,
    getCourses
};
