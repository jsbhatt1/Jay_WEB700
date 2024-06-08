/*********************************************************************************
*  WEB700 – Assignment 1
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.  
*  No part of this assignment has been copied manually or electronically from any other source
*  (including web sites) or distributed to other students.
* 
*  Name: Jayshivam Sanatbhai Bhatt | Student ID: jsbhatt1 (Student No. 150464238) | Date: May 24, 2024
*
********************************************************************************/ 

const studentName = "Jayshivam Sanatbhai Bhatt";
const studentEmail = "jsbhatt1@myseneca.ca";

const serverVerbs = ["GET", "GET", "GET", "POST", "GET", "POST"];
const serverPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout"];
const serverResponses = [
    "Welcome to WEB700 Assignment 1",
    `This course name is WEB700. This assignment was prepared by ${studentName}`,
    `${studentEmail}\n${studentName}`,
    "Hello, User Logged In",
    "Main Panel",
    "Logout Complete. Goodbye"
];

function webServerSimulator(verb, path) {
    for (let i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === verb && serverPaths[i] === path) {
            return serverResponses[i];
        }
    }
    return "404 Not Found";
}

console.log(webServerSimulator("GET", "/"));
console.log(webServerSimulator("GET", "/about"));
console.log(webServerSimulator("GET", "/contact"));
console.log(webServerSimulator("POST", "/login"));
console.log(webServerSimulator("GET", "/panel"));
console.log(webServerSimulator("POST", "/logout"));


function httpRequest(httpVerb, path) {
    for (let i = 0; i < serverPaths.length; i++) {
        if (serverVerbs[i] === httpVerb && serverPaths[i] === path) {
            return `200: ${serverResponses[i]}`;
        }
    }
    
    return "404: Not Found";
}

console.log(httpRequest("GET", "/")); // 200: Welcome to WEB700 Assignment 1
console.log(httpRequest("GET", "/about")); // 200: This assignment was prepared by Jayshivam Sanatbhai Bhatt
console.log(httpRequest("GET", "/contact")); // 200: Name & email id
console.log(httpRequest("POST", "/login")); // 200: Login complete
console.log(httpRequest("GET", "/panel")); // 200: Main panel
console.log(httpRequest("POST", "/logout")); // 200: Logout complete
console.log(httpRequest("PUT", "/")); // 404: Unable to process PUT request for /


const testVerbs = ["GET", "POST"];
const testPaths = ["/", "/about", "/contact", "/login", "/panel", "/logout", "/randomPath1", "/randomPath2"];

function automateTests() {
    // randomRequest - math function definition
    function randomRequest() {
        const randVerb = testVerbs[Math.floor(Math.random() * testVerbs.length)];
        const randPath = testPaths[Math.floor(Math.random() * testPaths.length)];
        
        console.log(httpRequest(randVerb, randPath));
    }
    
    
    setInterval(randomRequest, 1000);
}

automateTests();
