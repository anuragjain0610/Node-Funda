const url=require('url');
const myurl=new URL('http://mywebsite.com/hello.html?id=100&status=active');


//serialised url
console.log(myurl.href);
//host (root domain)
console.log(myurl.host);
//hostname (does not get port)
console.log(myurl.hostname);
//pathname
console.log(myurl.pathname);
//serialised  query
console.log(myurl.search);

//create search params
console.log(myurl.searchParams);

//add params
myurl.searchParams.append('abc','123');
console.log(myurl.searchParams);


// loop through params
myurl.searchParams.forEach((value,name)=>console.log(`${name}: ${value}`));











