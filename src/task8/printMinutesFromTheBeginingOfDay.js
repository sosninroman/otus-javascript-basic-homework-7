export function printMinutesFromTheBeginingOfDay() {
  const now = Date.now();
  const begin = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffMs = now.getTime() - begin.getTime();
  console.log(Math.floor(diffMs / 60000));
}
