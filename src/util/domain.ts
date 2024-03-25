import 'dotenv/config';

export const getApiDomain = (): string => {
    return process.env.API_DOMAIN ?? 'http://localhost:4000';
};
