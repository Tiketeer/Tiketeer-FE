import { atom } from 'recoil';
import { LOGIN_STATE } from 'type/login';

export const isLoginedState = atom({
    key: 'isLoginedState',
    default: localStorage.getItem(LOGIN_STATE)
        ? {
              isLogined: true,
              role: localStorage.getItem(LOGIN_STATE),
          }
        : {
              isLogined: false,
              role: '',
          },
});
