const fs = require('fs');


const requestHandler = (req,res)=>{
let url = req.url;
let method = req.method;

if(url == '/'){
    const fileData = fs.readFileSync("./message.txt", "utf-8")
    res.write('<html>');
    res.write('<body>');
    res.write(`<h1>${fileData}</h1>`);
    res.write(`<form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form>`)
    res.write('</html>');
    res.write('</body>');
    return res.end();
}
if(url == '/message' && method == 'POST'){
    const body = [];
    req.on('data', (chunk)=>{
        console.log(chunk);
        body.push(chunk);
    });
    return req.on('end', ()=>{
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split('=')[1];
        console.log(message);
        fs.writeFile('message.txt', message,(err)=>{
            res.statusCode = 302;
            res.setHeader('location', '/');
            return res.end();    
        });
        
    });
    
}
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>Node JS Response</title></head>');
res.write('<body><h1>Welcome to my Node JS Project</h1></body>');
res.write('</html>');
res.end();
}

module.exports = requestHandler;