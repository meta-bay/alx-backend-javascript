export default function getStudentIdsSum(lst) {
  const reds = lst.reduce((acc, obj) => acc + obj.id, 0);
  return reds;
}
