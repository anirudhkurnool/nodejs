const http = require('http');
const fs = require('fs');
const url = require('url');

//whenever httpServer gets a request the callback function in its constructor is run 
//the constructor is passed with two arguments req => all the request related data

const PORT_NUMBER = 1234

const httpServer = http.createServer((req, res) => {
    console.log("Request Received : ");
    //console.log(req);
    console.log(req.headers);
    const log = `${Date.now()} : ${req.method} new request received at ${req.url}\n`;
    const currUrl = url.parse(req.url, true); 
    console.log(currUrl)
    fs.appendFile("serverLog.txt", log , (err, data) => {
        switch (currUrl.pathname) {
            case '/':
                if (currUr.query != null) console.log(currUrl.query);
                res.end(`You have reached the server runnning at port ${PORT_NUMBER}...\n`);
                break;

            case '/about':
                if (currUrl.query != null) console.log(currUrl.query);
                res.end(`nodejs server\n port : ${PORT_NUMBER}\n`);
                break;

            default:
                res.end(`Invalid Route\n`);
                break;    
        }
    });  
});

httpServer.listen(PORT_NUMBER, () => {console.log("Server started and listening at port 1234")});

