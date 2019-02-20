// PATH module is basically used for working with files.

const path =require('path');
// base file name
console.log(__filename);
console.log(path.basename(__filename));

// dir name
console.log(__dirname);
console.log(path.dirname(__dirname));

// ext name
console.log(path.extname(__filename));
//create path object 
console.log(path.parse(__filename)); //we can access any property of this file

// concatenate path
console.log(path.join(__dirname,'test','index.html'));

//lot of other are present here 