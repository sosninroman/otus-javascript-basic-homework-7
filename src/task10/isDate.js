export function isDate(str) {
  if (typeof str !== 'string') {
    return false;
  }
  return /\d{1,2}[./]\d{2}[./]\d{2,4}/.test(str);
}
