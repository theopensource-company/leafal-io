import { TUserRecord } from './User.types';

export type AuthState<T = TUserRecord> = {
    authenticated: boolean;
    details?: T | null;
};
