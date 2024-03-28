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

export function getMonth(date: string): string {
    const m = new Date(date).getMonth() + 1;
    if (m < 10) return '0' + m;
    return m.toString();
}

export function getHours(date: string): string {
    const h = new Date(date).getHours();
    if (h < 10) return '0' + h;
    return h.toString();
}

export function getMinutes(date: string): string {
    const h = new Date(date).getMinutes();
    if (h < 10) return '0' + h;
    return h.toString();
}
