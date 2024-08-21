const fs = require('fs');

async function countStudents(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const studentRecords = content.split('\n').slice(1, -1);
      const records = [];
      const courseGroups = {};

      for (const student of studentRecords) {
        const details = student.split(',');
        records.push(details);
        courseGroups[details[details.length - 1]] = [];
      }

      for (const record of records) {
        if (record[record.length - 1] === 'CS') courseGroups.CS.push(record[0]);
        else if (record[record.length - 1] === 'SWE') courseGroups.SWE.push(record[0]);
      }

      const summary = {
        total: studentRecords.length,
        cs: {
          count: courseGroups.CS.length,
          names: courseGroups.CS.join(', '),
        },
        swe: {
          count: courseGroups.SWE.length,
          names: courseGroups.SWE.join(', '),
        },
      };

      console.log(`Number of students: ${summary.total}`);
      console.log(`Number of students in CS: ${summary.cs.count}. List: ${summary.cs.names}`);
      console.log(`Number of students in SWE: ${summary.swe.count}. List: ${summary.swe.names}`);

      resolve();
    });
  });
}

module.exports = countStudents;
