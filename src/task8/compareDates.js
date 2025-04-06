import { parseDate } from './parseDate';

export function compareDates(lhs, rhs) {
  const lms = parseDate(lhs).getTime();
  const rms = parseDate(rhs).getTime();

  if (lms === rms) {
    return 0;
  }
  return lms > rms ? 1 : -1;
}
