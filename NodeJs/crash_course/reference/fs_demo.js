const fs = require('fs')
const path = require('path')

//create folder
fs.mkdir(path.join(__dirname, '/teste'), {}, err => {
    if (err) throw err
    console.log('folder created...')
})

//create and write file
fs.writeFile(path.join(__dirname, '/teste', '/hello.txt'), 'Hello World', err => {
    if (err) throw err
    console.log('file writted...')

    //file append

    fs.appendFile(path.join(__dirname, '/teste', '/hello.txt'), ' Node.js looks like Python, huh?', err => {
        if (err) throw err
        console.log('file writted...')
    })
})

//Read file

fs.readFile(path.join(__dirname, '/teste', '/hello.txt'), 'utf8', (err, data) => {
    if (err) throw err
    console.log(data)
})

//Rename file 
fs.rename(
    path.join(__dirname, '/teste', '/hello.txt'),
    path.join(__dirname, '/teste', 'newfile.txt'), err => {
        if (err) throw err
        console.log('file renamed')
    })