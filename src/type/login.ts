export const LOGIN_STATE = 'loginState' as const;

export type Login = {
    email: string;
    roleEnum: string;
};
