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
