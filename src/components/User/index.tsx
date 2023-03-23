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
