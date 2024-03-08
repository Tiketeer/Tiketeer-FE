const month = [
    'JAN',
    'FEB',
    'MAR',
    'APR',
    'MAY',
    'JUN',
    'JUL',
    'AUG',
    'SEP',
    'OCT',
    'NOV',
    'DEC',
] as const;

export function getMonthAbbreviation(date: string): (typeof month)[number] {
    const newDate = new Date(date);
    return month[newDate.getMonth()];
}

export function getDate(date: string): string {
    const d = new Date(date).getDate();
    if (d < 10) return '0' + d;
    return d.toString();
}
