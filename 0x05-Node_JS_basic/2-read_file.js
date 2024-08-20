const fs = require('fs');

function countStudents (path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const studentsList = data.split('\n').filter((line) => line.trim() !== '');
    studentsList.shift();

    const fields = { CS: [], SWE: [] };

    studentsList.forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (field === 'CS') {
        fields.CS.push(firstname);
      } else if (field === 'SWE') {
        fields.SWE.push(firstname);
      }
    });

    const totalStudents = fields.CS.length + fields.SWE.length;

    console.log(`Number of students: ${totalStudents}`);
    console.log(
      `Number of students in CS: ${fields.CS.length}. List: ${fields.CS.join(
        ', '
      )}`
    );
    console.log(
      `Number of students in SWE: ${fields.SWE.length}. List: ${fields.SWE.join(
        ', '
      )}`
    );
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
