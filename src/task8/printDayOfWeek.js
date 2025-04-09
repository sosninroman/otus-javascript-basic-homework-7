import { parseDate } from './parseDate';

export function printDayOfWeek() {
  const dateStr = prompt('Enter date:');
  const date = parseDate(dateStr);
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeek = days[date.getDay()];
  console.log(dayOfWeek);
}
