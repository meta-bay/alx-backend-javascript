export default function createIteratorObject(report) {
  const iterable = [];
  for (const its of Object.keys(report.allEmployees)) {
    iterable.push(...report.allEmployees[its]);
  }

  return iterable;
}
