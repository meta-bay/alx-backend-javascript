const fs = require("node:fs");

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf-8").toString();
    if (!data) {
      throw new Error("Cannot load the database");
    }

    let countCs = 0;
    let countSwe = 0;
    let sweStudents = "";
    let csStudents = "";

    const rows = data.split("\n");
    rows.forEach((row) => {
      const columns = row.split(",");
      if (columns.length >= 4) {
        if (columns[3] === "CS") {
          countCs += 1;
          csStudents += (csStudents ? ", " : "") + columns[0];
        }
        if (columns[3] === "SWE") {
          countSwe += 1;
          sweStudents += (sweStudents ? ", " : "") + columns[0];
        }
      }
    });

    const totalStudents = countCs + countSwe;
    console.log(`Number of students: ${totalStudents}`);
    console.log(`Number of students in CS: ${countCs}. ${csStudents}`);
    console.log(`Number of students in SWE: ${countSwe}. ${sweStudents}`);
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
