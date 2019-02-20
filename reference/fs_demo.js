const fs=require('fs');
const path=require('path');


//create a folder
// fs.mkdir(path.join(__dirname,'/test'),{},err=>{
//     if (err) throw err;
//     console.log('folder created....');
// });

// create and write to a file
// fs.writeFile(path.join(__dirname,'test','Hello.txt'),'Hello!',err=>{
//     if (err) throw err;
//     console.log('file written to...');
// }); //writeFile() overwrites the file


// //append file
// fs.appendFile(path.join(__dirname,'test','Hello.txt'),'I Love Node.js!',err=>{
//     if (err) throw err;
//     console.log('file written to...');
// });  // use append file() to add to a file

//read a file 
fs.readFile(path.join(__dirname,'test','Hello.txt'),'utf8',(err,data)=>{
    if (err) throw err;
    console.log(data);
});

// rename a file
fs.rename(path.join(__dirname,'test','Hello.txt'),path.join(__dirname,'test','HelloNode.txt'),err=>{
    if (err) throw err;
    console.log('file renamed...');
});