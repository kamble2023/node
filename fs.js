
const fs = require('fs')

// Read file
//let fileContent = fs.readFileSync('F:\\NODE\\test\\f1.txt')
//console.log("data of file -> "+ fileContent)

// Write into a file
//fs.writeFileSync('F:\\NODE\\test\\f2.txt','Data two')

// append data to a file
//fs.appendFileSync('F:\\NODE\\test\\f1.txt',' Data Three')

//console.log('file has been appended')

// Deleting a file 
//fs.unlinkSync('F:\\NODE\\test\\f1.txt')

//console.log('File has been deleted')

//create a folder
//fs.mkdirSync('dir1')

// let folderPath = 'F:\\NODE\\dir1'

// let folderContent = fs.readdirSync(folderPath)

// console.log("Folder Content ", folderContent)

// Check wheter directory exists or not 
let dirExists = fs.existsSync('dir2')

console.log(dirExists)

// fs.rmdirSync('dir2')
// console.log("dir deleted")