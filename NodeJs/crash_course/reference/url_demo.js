const url = require('url')

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active')

//serialized URL
console.log(myUrl.href)

//Host 
console.log(myUrl.host)
//Host name  (without port)
console.log(myUrl.hostname)
//pathname
console.log(myUrl.pathname)

//Serialized query
console.log(myUrl.search)

//params object
console.log(myUrl.searchParams)

//ADD param
myUrl.searchParams.append('abc', '123')
console.log(myUrl.searchParams)

//loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`))