export function printStringsLength(str1, str2) {
  if (typeof str1 !== 'string' || typeof str2 !== 'string') {
    throw new Error('invalid arguments');
  }
  console.log(str1.length + str2.length);
}
