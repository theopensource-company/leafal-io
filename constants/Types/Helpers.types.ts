import { VariantProps as StandardVariantProps } from 'cva';

export type VariantProps<T extends () => unknown> = Required<{
    [P in keyof StandardVariantProps<T>]: Exclude<
        StandardVariantProps<T>[P],
        null
    >;
}>;

export type VariantPropOptions<
    T extends () => unknown,
    P extends keyof VariantProps<T>
> = VariantProps<T>[P];
