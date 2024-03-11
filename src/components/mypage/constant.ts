export const MyPagePathList = [
    '/',
    '/change/password',
    '/change/email',
    '/purchases',
    '/sales',
    '/purchases/detail',
] as const;

export type MyPagePathType = (typeof MyPagePathList)[number];

export const MyPagePathKeyList = [
    'MAIN',
    'CHANGE_PWD',
    'CHANGE_EMAIL',
    'PURCHASE',
    'SALE',
    'PURCHASE_DETAIL',
] as const;

export type MyPagePathKeyType = (typeof MyPagePathKeyList)[number];

export const MYPAGE_PATH: Record<MyPagePathKeyType, MyPagePathType> = {
    MAIN: '/',
    CHANGE_PWD: '/change/password',
    CHANGE_EMAIL: '/change/email',
    PURCHASE: '/purchases',
    SALE: '/sales',
    PURCHASE_DETAIL: '/purchases/detail',
};
