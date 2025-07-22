console.log("==========FILE HANDLING============");

const fs = require('fs');

//Synchronous
fs.writeFileSync("./fileName.txt", "text to be written");

//Async 
//you can pass a callback function here just in case
fs.writeFile("./AsyncWritefileName.txt", "asynchronously written text", (err) => { console.log("callback function"); });

//Synchronous file read
const syncFileData = fs.readFileSync("./readFile.txt", "utf-8");
console.log("file data :" + syncFileData);

//asynchronous file read
//it does n't return anyting but it expects a callback function where we can define what to do with the data
fs.readFile("./readFile.txt", "utf-8", (err, fileData) => {
    if (err) {
        console.log("error while reading the file");
    } else {
        console.log(`async file data : ${fileData}`);
    }
})


//append

fs.appendFileSync("./fileName.txt", "\nappend line\n");

fs.appendFile("./fileName.txt", "async append\n", (err) => {});


//copy file

fs.copyFileSync("./fileName.txt", "./fileName1.txt");


//file info
console.log(fs.statSync("./fileName.txt"));

//check if something is a file 
console.log(`is it a file : ${fs.statSync("./fileName.txt").isFile()}`);

//check if its a directory
console.log(`is it a file : ${fs.statSync("./fileName.txt").isDirectory()}`);


