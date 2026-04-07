export function relativeTime(isoDate: string): string {
  const then = new Date(isoDate).getTime();
  const now = Date.now();
  const diffMs = now - then;

  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30.44);
  const years = Math.floor(days / 365.25);

  if (days < 1) return 'hoje';
  if (days < 30) return days === 1 ? 'há 1 dia' : `há ${days} dias`;
  if (months < 12) return months === 1 ? 'há 1 mês' : `há ${months} meses`;
  return years === 1 ? 'há 1 ano' : `há ${years} anos`;
}
