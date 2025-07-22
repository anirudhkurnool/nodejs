console.log("Nodejs Modules");

const variableExport = require('./variableExport.js');

console.log(`exported variable = ${variableExport}`);

const functionExport = require('./functionExport.js');

console.log(`exported function = {${functionExport}}`);

console.log(`using exported function = ${functionExport(1, 2)}`);

const varsFuncsExport = require('./varsFuncsExport.js');

console.log(`variables and functions exported : ${varsFuncsExport}`);

console.log(varsFuncsExport.add(1, 2));
//console.log(varsFuncsExport.div(1, 0));
console.log(varsFuncsExport.PI);

//de-structuring can also be done 
//but the varibles and functions must be exported as an objec
const { PI, E, add, sub, mul, div } = require('./varsFuncsExport.js');
console.log(PI);
console.log(add(1, 2));

const varsFuncsExportUsingExportsObject = require('./varFuncsExportUsingExportsObject.js');
console.log(varsFuncsExportUsingExportsObject.add(1, 2));
console.log(varsFuncsExportUsingExportsObject.PI)

