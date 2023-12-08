import { z } from 'zod';
import { record } from './Common.types';

const user: string = /* surrealql */ `
    DEFINE TABLE user SCHEMAFULL
        PERMISSIONS
            FOR select FULL
            FOR update WHERE id = $auth.id
            FOR delete NONE;

    DEFINE TABLE pubuser AS SELECT username, avatar, profile FROM user;

    DEFINE FIELD username ON user TYPE string ASSERT 3 < string::len($value) < 16;
    DEFINE FIELD email ON user TYPE string ASSERT string::is::email($value);
    DEFINE FIELD password ON user TYPE string;
    DEFINE FIELD avatar ON user TYPE option<string> ASSERT string::is::url($value);

    DEFINE FIELD profile ON user TYPE object;
    DEFINE FIELD profile.displayname ON user TYPE option<string> ASSERT 1 < string::len($value) < 255;

    DEFINE INDEX username ON TABLE user COLUMNS username UNIQUE;
`;

// Standard user accounts
export const User = z.object({
    id: record('user'),
    username: z.string(),
    email: z.string().email(),
    password: z.string(),
    avatar: z.string().url(),
    profile: z.object({
        displayname: z.string().optional(),
    }),
});
export const PublicUser = User.pick({
    username: true,
    avatar: true,
    profile: true,
});

export type User = z.infer<typeof User>;
export type PublicUser = z.infer<typeof PublicUser>;

export default user;
