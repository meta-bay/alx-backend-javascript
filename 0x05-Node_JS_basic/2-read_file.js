const fs = require('fs');

function countStudents(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const students = content.split('\n').slice(1, -1);
    const records = [];
    const courses = {};

    for (const student of students) {
      const details = student.split(',');
      records.push(details);
      courses[details[details.length - 1]] = [];
    }

    for (const record of records) {
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

    console.log(`Number of students: ${summary.total}`);
    console.log(`Number of students in CS: ${summary.cs.count}. List: ${summary.cs.names}`);
    console.log(`Number of students in SWE: ${summary.swe.count}. List: ${summary.swe.names}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
