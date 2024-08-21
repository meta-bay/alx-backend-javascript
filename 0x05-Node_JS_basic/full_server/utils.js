import fs from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
  }
  
  fs.readFile(filePath, (error, content) => {
    if (error) {
      reject(new Error('Cannot load the database'));
      return;
    }
    
    const lines = content
      .toString('utf-8')
      .trim()
      .split('\n');
      
    const studentData = {};
    const headers = lines[0].split(',');
    const studentAttributes = headers.slice(0, headers.length - 1);

    for (const line of lines.slice(1)) {
      const record = line.split(',');
      const attributeValues = record.slice(0, record.length - 1);
      const course = record[record.length - 1];
      
      if (!Object.keys(studentData).includes(course)) {
        studentData[course] = [];
      }
      
      const studentEntry = studentAttributes
        .map((attribute, index) => [attribute, attributeValues[index]]);
        
      studentData[course].push(Object.fromEntries(studentEntry));
    }
    
    resolve(studentData);
  });
});

export default readDatabase;
module.exports = readDatabase;
