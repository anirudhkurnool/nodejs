PORT_NUMBER = 1234;


const express = require('express');
const app = express();

app.listen(PORT_NUMBER, () => { console.log("server listening at ", PORT_NUMBER); } );
