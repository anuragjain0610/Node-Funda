const os=require('os');

// platform info
console.log(os.platform());

// arch info
console.log(os.arch());

//CPU core info
// console.log(os.cpus());

//memory info =>free
console.log(os.freemem());

//memory info =>total
console.log(os.totalmem());

// home dir
console.log(os.homedir());

// uptime
console.log(os.uptime());