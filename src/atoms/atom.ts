import { atom } from 'recoil';

export const isLoginedState = atom({
    key: 'isLoginedState',
    default: localStorage.getItem('loginState') ? true : false,
});
