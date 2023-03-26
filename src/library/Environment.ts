export type TEnv = 'dev' | 'prod';
export const Environment = (import.meta.env.VITE_ENV ?? 'prod') as TEnv;

export type FeatureFlagValue = boolean | number | string;
export type FeatureFlagSchema = Record<
    string,
    {
        readonly?: boolean;
        options: readonly [FeatureFlagValue, ...FeatureFlagValue[]];
    }
>;

export type FeatureFlags = {
    [T in FeatureFlag]: FeatureFlagOption<T>;
};

export type FeatureFlagDefaults = Record<TEnv, Partial<FeatureFlags>>;

export type FeatureFlag = keyof typeof featureFlagSchema;
export type FeatureFlagOption<TFeatureFlag extends FeatureFlag> =
    (typeof featureFlagSchema)[TFeatureFlag]['options'][number];

const hasFFValue = (v: unknown): v is FeatureFlagValue =>
    ['string', 'number', 'boolean'].includes(typeof v);

export const featureFlagSchema = {
    allowDatabaseMigration: {
        readonly: true,
        options: [false, true] as const,
    },
} satisfies FeatureFlagSchema;

export const featureFlagDefaults = {
    prod: {},
    dev: {
        allowDatabaseMigration: true,
    },
} satisfies FeatureFlagDefaults;

const featureFlagFromEnv = (flag: FeatureFlag): FeatureFlagValue | void => {
    if (featureFlagSchema[flag].readonly) return undefined;
    if (import.meta.env[`VITE_FFLAG_${flag.toUpperCase()}`]) {
        const v = import.meta.env[`VITE_FFLAG_${flag.toUpperCase()}`];
        const lower = v?.toLowerCase();
        return lower === 'true'
            ? true
            : lower === 'false'
            ? false
            : !v || isNaN(+v)
            ? v
            : parseInt(v);
    }
};

const featureFlagDefault = (flag: FeatureFlag) => {
    const envFlags = featureFlagDefaults[Environment];
    return flag in envFlags
        ? envFlags[flag]
        : featureFlagSchema[flag].options[0];
};

export const featureFlagOptions = Object.keys(
    featureFlagSchema
) as FeatureFlag[];

export const featureFlags = featureFlagOptions.reduce((prev, flag) => {
    const fromEnv = featureFlagFromEnv(flag);
    return {
        ...prev,
        [flag]: hasFFValue(fromEnv) ? fromEnv : featureFlagDefault(flag),
    } as FeatureFlags;
}, {} as FeatureFlags);
