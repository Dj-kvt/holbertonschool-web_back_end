const express = require('express');
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

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const output = await countStudents(process.argv[2]);
    res.send(`This is the list of our students\n${output}`);
  } catch (err) {
    res.status(500).send('Cannot load the database');
  }
});

app.listen(1245);

module.exports = app;
