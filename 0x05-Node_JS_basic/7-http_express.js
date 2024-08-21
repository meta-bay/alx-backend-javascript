const express = require('express');
const fs = require('fs');

async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (error, content) => {
      if (error) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = content.split('\n').slice(1, -1);
      const studentRecords = [];
      const courses = {};

      for (const student of students) {
        const details = student.split(',');
        studentRecords.push(details);
        courses[details[details.length - 1]] = [];
      }

      for (const record of studentRecords) {
        if (record[record.length - 1] === 'CS') courses.CS.push(record[0]);
        else if (record[record.length - 1] === 'SWE') courses.SWE.push(record[0]);
      }

      const summary = {
        total: students.length,
        cs: {
          count: courses.CS.length,
          names: courses.CS.join(', '),
        },
        swe: {
          count: courses.SWE.length,
          names: courses.SWE.join(', '),
        },
      };

      const output = [
        `Number of students: ${summary.total}`,
        `Number of students in CS: ${summary.cs.count}. List: ${summary.cs.names}`,
        `Number of students in SWE: ${summary.swe.count}. List: ${summary.swe.names}`,
      ];

      resolve(output.join('\n'));
    });
  });
}

const filePath = process.argv[2];
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.write('This is the list of our students\n');
  countStudents(filePath)
    .then((output) => {
      res.end(output);
    })
    .catch(() => {
      res.end('Cannot load the database');
    });
});

app.listen(1245, 'localhost');

module.exports = app;
