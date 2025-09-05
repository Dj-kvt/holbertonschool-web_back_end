const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  const { url } = req;

  res.setHeader('Content-Type', 'text/plain');

  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    countStudents(process.argv[2])
      .then(data => {
        res.end(`This is the list of our students\n${data}`);
      })
      .catch(err => {
        res.end(`This is the list of our students\n${err.message}`);
      });
  }
});

app.listen(1245);

module.exports = app;
