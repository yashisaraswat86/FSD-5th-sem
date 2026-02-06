const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFile('index.html', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end('Error loading HTML');
            }
            res.setHeader('Content-Type', 'text/html');
            res.end(data);
        });
    } else if (req.url === '/style.css') {
        fs.readFile('style.css', 'utf8', (err, data) => {
            if (err) {
                res.statusCode = 500;
                return res.end('Error loading CSS');
            }
            res.setHeader('Content-Type', 'text/css');
            res.end(data);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});
const port = 3000 ;

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
    console.log('http://localhost:3000')
});

