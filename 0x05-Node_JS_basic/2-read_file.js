const fs = require('node:fs')

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, "utf8");
    const studentsList = data.split("\n").slice(1, -1);
    const dbList = [];
    const fields = {};
    for (const i of studentsList) {
      const temp = i.split(",");
      dbList.push(temp);
      fields[temp[temp.length - 1]] = [];
    }
    for (const i of dbList) {
      if (i[i.length - 1] === "CS") fields.CS.push(i[0]);
      else if (i[i.length - 1] === "SWE") fields.SWE.push(i[0]);
    }

    const info = {
      count: studentsList.length,
      cs: {
        count: fields.CS.length,
        names: fields.CS.join(", "),
      },
      swe: {
        count: fields.SWE.length,
        names: fields.SWE.join(", "),
      },
    };

    console.log(`Number of students: ${info.count}`);
    console.log(
      `Number of students in CS: ${info.cs.count}. List: ${info.cs.names}`
    );
    console.log(
      `Number of students in SWE: ${info.swe.count}. List: ${info.swe.names}`
    );
  } catch (err) {
    throw new Error("Cannot load the database");
  }
}

module.exports = countStudents;
