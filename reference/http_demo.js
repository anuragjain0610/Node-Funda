const http=require('http');
//create a server object
http.createServer((req,res)=>{
    // write response
    res.write('Hello Nodejs');
    res.end(); 
}).listen(5000,()=>console.log('server is running on port 5000'));