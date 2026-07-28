/**
 * Determines whether an event is still upcoming, based on its ISO 8601 start date.
 * Events without a valid date are treated as upcoming so they are never hidden by accident.
 */
export function isUpcoming(startsAt: string, now: Date = new Date()): boolean {
  const startTime = new Date(startsAt).getTime();
  if (Number.isNaN(startTime)) return true;
  return startTime >= now.getTime();
}
