import readDatabase from '../utils';

const MAJOR_OPTIONS = ['CS', 'SWE'];

class StudentsController {
  static getAllStudents(req, res) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';

    readDatabase(filePath)
      .then((studentData) => {
        const responseContent = ['This is the list of our students'];
        const compareFields = (a, b) => {
          if (a[0].toLowerCase() < b[0].toLowerCase()) {
            return -1;
          }
          if (a[0].toLowerCase() > b[0].toLowerCase()) {
            return 1;
          }
          return 0;
        };

        for (const [course, students] of Object.entries(studentData).sort(compareFields)) {
          responseContent.push([
            `Number of students in ${course}: ${students.length}.`,
            'List:',
            students.map((student) => student.firstname).join(', '),
          ].join(' '));
        }
        res.status(200).send(responseContent.join('\n'));
      })
      .catch((error) => {
        res
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }

  static getAllStudentsByMajor(req, res) {
    const filePath = process.argv.length > 2 ? process.argv[2] : '';
    const { major } = req.params;

    if (!MAJOR_OPTIONS.includes(major)) {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    readDatabase(filePath)
      .then((studentData) => {
        let responseMessage = '';

        if (Object.keys(studentData).includes(major)) {
          const students = studentData[major];
          responseMessage = `List: ${students.map((student) => student.firstname).join(', ')}`;
        }
        res.status(200).send(responseMessage);
      })
      .catch((error) => {
        res
          .status(500)
          .send(error instanceof Error ? error.message : error.toString());
      });
  }
}

export default StudentsController;
module.exports = StudentsController;
