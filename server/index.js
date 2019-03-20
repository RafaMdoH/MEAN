import http from 'http';
import Debug from 'debug';
import app from './app'


const port = 3000;
const debug = new Debug('sw0910-proyecto:root');

// const app = http.createServer((req, res) => {
//     debug('New request');
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     res.write('Hola desde el sevidor');
//     res.end();
// });

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
});