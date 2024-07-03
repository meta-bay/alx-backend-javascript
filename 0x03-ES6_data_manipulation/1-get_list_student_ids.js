export default function getListStudentIds(lst) {
  if (!Array.isArray(lst)) {
    return [];
  }

  const ids = lst.map((obj) => obj.id);
  return ids;
}
