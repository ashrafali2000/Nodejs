// first-practice-video

// console.log("Hello world");
// DOM did not exist

const http = require("http");
const fs = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "data.txt");

const server = http.createServer((req, res) => { 
    if(req.url === "/"){
        res.write("hello world");
        res.end();
    }
   else if(req.url === "/form"){
    res.setHeader("Content-type", "text/html");
        res.write("<form action = '/submit' method = 'POST'> <input name='mydata1' />  <input name='mydata2' /><button>Submit</button> </form>");
        res.end();
    }
    else if(req.url === "/submit"){
        let mydata = "";
        req.on("data", chunk => mydata += chunk);
        req.on("end",() => {
            fs.readFile(filePath,"utf8", (_,fileData) => {
                const newData = fileData +"\n"+ mydata;
                fs.writeFile(filePath,newData,() => {
                    res.write("Data Recieved");
                    res.end();
                })
            })
    });
        }
    else{
        res.write("page NOt Found");
        res.end();
    }
})
server.listen(3000);