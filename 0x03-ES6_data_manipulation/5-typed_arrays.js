export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw Error('Position outside range');
  }

  const int8buff = new ArrayBuffer(length);

  const array8 = new Int8Array(int8buff);
  array8[position] = value;

  const view = new DataView(int8buff);

  return view;
}
