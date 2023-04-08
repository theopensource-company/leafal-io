import { SurrealQuery } from '~/library/Surreal';
import { TPublicUserRecord, TUserRecord } from '~/library/Types/User.types';

export function mockupUser(username: string): TUserRecord {
    return {
        id: 'user:mockup',

        username: username,
        email: 'john.doe@example.org',
        verified: true,

        firstname: 'John',
        lastname: 'Doe',

        picture: '/images/icons/icon_512x512.png',
        profile: {
            displayname: 'JohnDoeGamer',
        },

        created: new Date(),
        updated: new Date(),
    };
}

export function toPublic(user: TUserRecord): TPublicUserRecord {
    return {
        id: 'pubuser:mockup',
        username: user.username,
        picture: user.picture,
        profile: user.profile,
        created: user.created,
    };
}

export async function getPublicProfile(
    username: string
): Promise<TPublicUserRecord | null> {
    const result = await SurrealQuery<TPublicUserRecord>(
        `SELECT * FROM pubuser WHERE username=$username`,
        { username }
    );
    return result[0].result ? result[0].result[0] || null : null;
}
