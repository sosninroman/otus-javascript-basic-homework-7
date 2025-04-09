export function isWord(str) {
  if (typeof str !== 'string') {
    return false;
  }
  return str.split(' ').length === 1;
}
