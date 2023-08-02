const http = require('http');

const server = http.createServer((req,res)=>{
    const url = req.url;
    if(url == '/home'){
        res.write('<html>');
        res.write('<head><title>Node JS Response</title></head>');
        res.write('<body><h1>Welcome Home</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url == '/about'){
        res.write('<html>');
        res.write('<head><title>Node JS Response</title></head>');
        res.write('<body><h1>Welcome to about us page.</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url == '/about'){
        res.write('<html>');
        res.write('<head><title>Node JS Response</title></head>');
        res.write('<body><h1>Welcome to my Node Js project</h1></body>');
        res.write('</html>');
        return res.end();
    }
    if(url == '/'){
        res.write('<html>');
        res.write('<head><title>Node JS Response</title></head>');
        res.write('<body><h1>Hello From Node JS</h1></body>');
        res.write('</html>');
        return res.end();
    }
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Node JS Response</title></head>');
        res.write('<body><h1>Welcome to my Node JS Project</h1></body>');
        res.write('</html>');
        res.end();
})
server.listen(3000);