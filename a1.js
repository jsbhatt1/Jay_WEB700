console.log("Hello World");
// Fill in your actual name and email in the placeholders
const studentName = "Jayshivam";
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

// Example web server simulator function
function webServerSimulator(verb, path) {
    for (let i = 0; i < serverVerbs.length; i++) {
        if (serverVerbs[i] === verb && serverPaths[i] === path) {
            return serverResponses[i];
        }
    }
    return "404 Not Found";
}

console.log(webServerSimulator("GET", "/"));        // Output: Welcome to WEB700 Assignment 1
console.log(webServerSimulator("GET", "/about"));   // Output: This course name is WEB700. This assignment was prepared by Your Name
console.log(webServerSimulator("GET", "/contact")); // Output: your.email@example.com
                                                  //          Your Name
console.log(webServerSimulator("POST", "/login"));  // Output: Hello, User Logged In
console.log(webServerSimulator("GET", "/panel"));   // Output: Main Panel
console.log(webServerSimulator("POST", "/logout")); // Output: Logout Complete. Goodbye
