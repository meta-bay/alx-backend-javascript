const fs = require('fs');

function countStudents (filePath) {
  try {
    let lines = fs.readFileSync(filePath, 'utf-8').split('\n');
    lines = lines.slice(1, lines.length - 1);

    const fieldMap = new Map();

    lines.forEach((line) => {
      const [name, , , field] = line.split(',');

      if (fieldMap.has(field)) {
        fieldMap.get(field).names.push(name);
        fieldMap.get(field).count += 1;
      } else {
        fieldMap.set(field, { names: [name], count: 1 });
      }
    });

    console.log(`Number of students: ${lines.length}`);

    fieldMap.forEach((data, field) => {
      console.log(
        `Number of students in ${field}: ${data.count}. List: ${data.names.join(
          ', '
        )}`
      );
    });
  } catch (err) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;