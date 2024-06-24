export default function appendToEachArrayValue(array, appendString) {
  const newArray = [];
  for (const value of array) {
    const temp = appendString + value;
    newArray.push(temp);
  }

  return newArray;
}
