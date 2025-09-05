const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const students = lines.slice(1).map((line) => line.split(','));

      const total = students.length;
      const fields = {};

      students.forEach(([firstname, , , field]) => {
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstname);
      });

      let output = `Number of students: ${total}`;
      for (const [field, list] of Object.entries(fields)) {
        output += `\nNumber of students in ${field}: ${list.length}. List: ${list.join(', ')}`;
      }

      resolve(output);
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
