export default function createEmployeesObject(departmentName, employees) {
  const catigo = { [`${departmentName}`]: [] };
  for (const emps of employees) {
    catigo[`${departmentName}`].push(emps);
  }

  return catigo;
}
