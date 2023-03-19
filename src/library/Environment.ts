export type TEnv = 'dev' | 'prod';

export type FeatureFlagSchema = Record<
    string,
    {
        readonly?: boolean;
        options: readonly (boolean | number | string)[];
    }
>;

export type FeatureFlagDefaults = Record<
    TEnv,
    Partial<{
        [T in FeatureFlag]: FeatureFlagOption<T>;
    }>
>;

export type FeatureFlag = keyof typeof featureFlagSchema;
export type FeatureFlagReadonly<TFeatureFlag extends FeatureFlag> =
    (typeof featureFlagSchema)[TFeatureFlag]['readonly'];
export type FeatureFlagOption<TFeatureFlag extends FeatureFlag> =
    (typeof featureFlagSchema)[TFeatureFlag]['options'][number];
export type FeatureFlagDefaultOption<TFeatureFlag extends FeatureFlag> =
    (typeof featureFlagSchema)[TFeatureFlag]['options'][0];

export const featureFlagSchema = {
    allowDatabaseMigration: {
        readonly: true,
        options: [false, true, 'bla'] as const,
    },
} satisfies FeatureFlagSchema;

export const featureFlagDefaults = {
    prod: {},
    dev: {
        allowDatabaseMigration: true,
    },
} satisfies FeatureFlagDefaults;
