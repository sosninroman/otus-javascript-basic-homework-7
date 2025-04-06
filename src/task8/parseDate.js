export function parseDate(str) {
  const [day, month, year] = str.split('.');
  if (!day || !month || !year) {
    throw new Error('Invalid date format');
  }
  const date = new Date(year, month - 1, day);
  if (
    isNaN(date) ||
    date.getFullYear() !== Number(year) ||
    date.getMonth() + 1 !== Number(month) ||
    date.getDate() !== Number(day)
  ) {
    throw new Error('Invalid date');
  }
  return date;
}
