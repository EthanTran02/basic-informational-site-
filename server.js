import http from 'http';
import fs from 'fs/promises';

http
  .createServer(async (req, res) => {
    try {
      if (req.url === '/') {
        const file = await fs.readFile(`./index.html`);
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(file);
      } else {
        const file = await fs.readFile(`./${req.url}.html`);
        res.writeHead(200, { 'content-type': 'text/html' });
        res.end(file);
      }
    } catch (err) {
      const file = await fs.readFile('./404.html');
      res.writeHead(404, { 'content-type': 'text/html' });
      res.end(file);
    }
  })
  .listen(8080);
