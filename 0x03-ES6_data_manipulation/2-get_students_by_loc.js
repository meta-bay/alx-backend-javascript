export default function getStudentsByLocation(lst, city) {
  const filt = lst.filter((obj) => obj.location === city);
  return filt;
}
