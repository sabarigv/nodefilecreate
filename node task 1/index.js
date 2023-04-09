const fs = require("fs");

fs.writeFile("current timestamp.txt", 'Text file created', (err) =>{
    if(err) throw err;
    console.log("successfully created...");
})
//text file created

fs.readFile("./create.txt",(err, data) =>{
    if(err) throw err;
    console.log(data.toString());
})
//to retrieve the created file