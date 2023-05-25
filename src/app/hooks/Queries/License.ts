'use client';
import { SurrealInstance as surreal } from '@/app/lib/Surreal';
import {
    TActionCreateLicense,
    TLicenseRecord,
} from '@/constants/types/License.types';
import { useMutation, useQuery } from '@tanstack/react-query';

export const getLicenseForSlug = async (slug: string) => {
    const result = await surreal.query<[TLicenseRecord[]]>(
        /* surrealql */ `
            SELECT *
            FROM license
            WHERE licensed.slug=$slug
            FETCH holder, licensed;
        `,
        { slug }
    );

    if (!result?.[0]?.result?.[0]) return null;
    return result[0].result[0];
};

export const getAllLicenses = async () => {
    const result = await surreal.query<[TLicenseRecord[]]>(/* surrealql */ `
            SELECT *
            FROM license
            FETCH holder, licensed;
        `);

    if (!result?.[0]?.result?.[0]) return null;
    return result[0].result;
};

export const useLicense = (slug: TLicenseRecord['licensed']['slug']) =>
    useQuery({
        queryKey: ['licenses', slug],
        queryFn: () => getLicenseForSlug(slug),
    });

export const useAllLicenses = () =>
    useQuery({
        queryKey: ['licenses', 'all'],
        queryFn: () => getAllLicenses(),
    });

export const useCreateLicense = () =>
    useMutation({
        mutationKey: ['licenses', 'mutate', 'create'],
        mutationFn: async (create: TActionCreateLicense) => {
            const result = await surreal.query<[TLicenseRecord[]]>(
                /* surrealql */ `
                CREATE license CONTENT {
                    holder: $auth,
                    licensed: $licensed,
                };
            `,
                {
                    ...create,
                }
            );

            if (!result?.[0]?.result?.[0]) return null;
            return result[0].result[0];
        },
    });
