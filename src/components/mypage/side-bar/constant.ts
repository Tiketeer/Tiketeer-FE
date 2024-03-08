import { MyPagePathType } from '../constant';

export const Contents: Record<string, string[]> = {
    'Ticketing Info': ['Purchases', 'Sales'],
    'My Info': ['Change Password', 'Change Email'],
};
export const PathToButtonKey: Record<MyPagePathType, string | undefined> = {
    '/': undefined,
    '/change/email': Contents['My Info'][1],
    '/change/password': Contents['My Info'][0],
    '/purchases': Contents['Ticketing Info'][0],
    '/sales': Contents['Ticketing Info'][1],
};
