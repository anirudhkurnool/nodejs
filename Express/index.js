const express = require('express');
//const http = require('http');
const fs = require('fs');

const PORT_NUMBER = 1234;

const app = express();

app.get('/', (req, res) => {
    const log = `${Date.now()} : GET : / : request received..\n`;
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("Hello from server running at " + PORT_NUMBER);
    });
})

app.get('/about', (req, res) => {
    const log = `${Date.now()} : GET : /about : request received..\n`;
    if(req.query != null) console.log(req.query);
    fs.appendFile("log.txt", log, (err, data) => {
        res.end("nodejs server\n port : " + PORT_NUMBER);
    })
});

// const httpServer = http.createServer(app);

// httpServer.listen(PORT_NUMBER, () => { console.log("Server listening at port " + PORT_NUMBER)});

//OR 

app.listen(PORT_NUMBER, () => { console.log("Server listening at port " + PORT_NUMBER); })