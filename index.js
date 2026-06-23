const http= require('http');
const fs= require('fs');

const server= http.createServer((req,res) =>{
    console.log('request made');

    res.setHeader('Content-type', 'text/html');

    let path= './';

    switch(req.url){
        case '/':
            path += 'index.html';
            res.statusCode=200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode=200;
            break;
        case '/contact':
            path += 'contact-me.html';
            res.statusCode=200;
            break;
        default:
            path+= '404.html';
            break;
    }

    fs.readFile(path, (err,data)=>{
        if(err){
            console.log(err);
        } else{
            res.write(data);
            res.end();
        }
    });
});

server.listen(8080, 'localhost', () =>{
    console.log('listening for req on port 8080');
});