const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter(line => line.trim() !== '');
      lines.shift();
      const students = lines.map(line => line.split(','));
      const total = students.length;

      const fields = {};
      for (const student of students) {
        const field = student[3];
        const firstName = student[0];
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }

      let response = `Number of students: ${total}`;
      for (const [field, names] of Object.entries(fields)) {
        response += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
      }

      resolve(response);
    });
  });
}

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    countStudents(process.argv[2])
      .then((output) => {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`This is the list of our students\n${output}`);
      })
      .catch((err) => {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Cannot load the database');
      });
  }
});

app.listen(1245);

module.exports = app;
