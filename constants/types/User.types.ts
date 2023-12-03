import { z } from 'zod';
import { record } from './Common.types';

const user: string = /* surrealql */ `
    DEFINE TABLE user SCHEMAFULL
        PERMISSIONS
            FOR select FULL
            FOR update WHERE id = $auth.id
            FOR delete NONE;

    DEFINE FIELD username ON user TYPE string ASSERT 3 < string::len($value) < 16;
    DEFINE FIELD email ON user TYPE string ASSERT string::is::email($value);
    DEFINE FIELD password ON user TYPE string;

    DEFINE INDEX username ON TABLE user COLUMNS username UNIQUE;
`;

// Standard user accounts
export const User = z.object({
    id: record('user'),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
});

export type User = z.infer<typeof User>;

export default user;