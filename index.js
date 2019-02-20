const http=require('http');
const paht=require('path');
const fs=require('fs');

const server=http.createServer((req,res)=>{
    res.write('mysever');
    res.end();
    console.log(req.url);
});

const PORT=process.env.PORT || 5000;
server.listen(PORT,()=>console.log('listening on port:',PORT));