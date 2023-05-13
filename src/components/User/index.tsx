import { SurrealInstance } from '~/library/Surreal';
import { TPublicUserRecord, TUserRecord } from '~/library/Types/User.types';

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
    const result = await SurrealInstance.query<[TPublicUserRecord[]]>(
        `SELECT * FROM pubuser WHERE username=$username`,
        { username }
    );
    return result[0].result ? result[0].result[0] || null : null;
}
