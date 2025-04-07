export function isEmail(str) {
  if (typeof str !== 'string') {
    return false;
  }
  return /[\da-z.]+@[\da-z]+\.[a-z]+/.test(str);
}
