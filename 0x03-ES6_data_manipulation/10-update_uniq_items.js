export default function updateUniqueItems(map) {
  if (typeof (map) !== 'object') {
    throw Error('Cannot process');
  }
  for (const [item, q] of map) {
    if (q === 1) {
      map.set(item, 100);
    }
  }
  return map;
}
