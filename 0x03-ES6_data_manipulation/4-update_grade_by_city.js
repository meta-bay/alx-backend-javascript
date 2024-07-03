export default function updateStudentGradeByCity(lst, city, newGrade) {
  const newLst = lst.filter((student) => student.location === city)
    .map((student) => {
      const grd = newGrade.find((g) => g.studentId === student.id);
      if (grd !== undefined) {
        return { ...student, grade: grd.grade };
      }
      return { ...student, grade: 'N/A' };
    });

  return newLst;
}
