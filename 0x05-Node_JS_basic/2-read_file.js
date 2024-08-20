const fs = require('fs');

function countStudents (dbPath) {
  try {
    const fileContent = fs.readFileSync(dbPath, 'utf8');
    const students = fileContent.split('\n').slice(1);
    const studentData = [];
    const fieldGroups = {};

    for (const student of students) {
      const details = student.split(',');
      studentData.push(details);
      fieldGroups[details[details.length - 1]] = [];
    }

    for (const record of studentData) {
      if (record[record.length - 1] === 'CS') fieldGroups.CS.push(record[0]);
      else if (record[record.length - 1] === 'SWE') fieldGroups.SWE.push(record[0]);
    }

    const summary = {
      total: students.length,
      cs: {
        count: fieldGroups.CS.length,
        names: fieldGroups.CS.join(', ')
      },
      swe: {
        count: fieldGroups.SWE.length,
        names: fieldGroups.SWE.join(', ')
      }
    };

    console.log(`Number of students: ${summary.total}`);
    console.log(`Number of students in CS: ${summary.cs.count}. List: ${summary.cs.names}`);
    console.log(`Number of students in SWE: ${summary.swe.count}. List: ${summary.swe.names}`);
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
