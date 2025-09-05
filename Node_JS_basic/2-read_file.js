const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8').split('\n').filter(line => line.trim() !== '');
    const headers = data.shift();
    const students = data.map(line => line.split(','));
    console.log(`Number of students: ${students.length}`);

    const fields = {};
    for (const student of students) {
      const field = student[3];
      const firstName = student[0];
      if (!fields[field]) fields[field] = [];
      fields[field].push(firstName);
    }

    for (const [field, names] of Object.entries(fields)) {
      console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
    }
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
