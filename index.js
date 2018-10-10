/*
 * Primary file for api
 */

// Dependencies
const http = require('http');
const url = require('url');


// Server should respond to all the queries
const server = http.createServer((req,res)=>{
    
    // Get the url and parsed it
    const parsedUrl = url.parse(req.url, true);

    // Get the path
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '')

    // Get the HTTP Method
    const method = req.method.toLowerCase();

    // Get the query string as an object
    const queryStringObject = parsedUrl.query

    // Get the headers as an object
    const headers = req.headers;

    // Send the reponse
    res.end('Hello World\n');

    // log the request path
    console.log('Request received with this headers: ', headers);
});

// Start the server on port 3000
server.listen(3000, ()=>{
    console.log("Server has started on port 3000")
});