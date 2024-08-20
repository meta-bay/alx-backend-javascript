const fs = require("node:fs");

function countStudents(path) {
  var fs = require("fs");
  try {
    var data = fs.readFileSync(path).toLocaleString();
    if (!data) {
      throw new Error("Cannot load the database");
    }
  } catch (err) {
    throw new Error("Cannot load the database");
  }
  countCs = 0;
  countSwe = 0;
  sweStudents = "";
  csStudents = "";

  var rows = data.split("\n");
  rows.forEach((row) => {
    columns = row.split(",");
    if (columns[3] === "CS") {
      countCs += 1;
      csStudents += (csStudents ? ", " : "") + columns[0];
    }
    if (columns[3] === "SWE") {
      countSwe += 1;
      sweStudents += (sweStudents ? ", " : "") + columns[0];
    }
  });
  totalStudents = countCs + countSwe;
  console.log(`Number of students: ${totalStudents}`);
  console.log(`Number of students in CS: ${countCs}. ${csStudents}`);
  console.log(`Number of students in CS: ${countSwe}. ${sweStudents}`);
}
module.exports = countStudents;
