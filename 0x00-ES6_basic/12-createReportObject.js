export default function createReportObject(employeesList) {
  const report = { allEmployees: {} };

  for (const dep of Object.keys(employeesList)) {
    report.allEmployees[dep] = employeesList[dep];
  }

  report.getNumberOfDepartments = () => Object.keys(report.allEmployees).length;

  return report;
}
