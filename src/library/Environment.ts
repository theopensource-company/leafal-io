export type TEnv = 'dev' | 'prod';
export const Environment = (import.meta.env.VITE_ENV ?? 'prod') as TEnv;
console.log(Environment);

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
    return !featureFlagSchema[flag].readonly && flag in envFlags
        ? envFlags[flag]
        : featureFlagSchema[flag].options[0];
};

export const featureFlagOptions = Object.keys(
    featureFlagSchema
) as FeatureFlag[];

export const featureFlags = featureFlagOptions.reduce(
    (prev, flag) =>
        ({
            ...prev,
            [flag]: featureFlagFromEnv(flag) ?? featureFlagDefault(flag),
        } as FeatureFlags),
    {} as FeatureFlags
);
