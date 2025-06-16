/**
 * offsetHoursSimple
 * @param offset  Number of hours to offset the current time.
 *                  - Negative: move into the past
 *                  - Positive: move into the future
 * @returns       A Date object representing the adjusted time.
 */
export function offsetHoursSimple(offset: number): Date {
  const msPerHour = 60 * 60 * 1000;
  return new Date(Date.now() + offset * msPerHour);
}
