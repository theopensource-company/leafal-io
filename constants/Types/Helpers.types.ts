import { VariantProps as StandardVariantProps } from "cva";

export type VariantProps<T extends (...args: any) => any> = Required<{
    [P in keyof StandardVariantProps<T>]: Exclude<StandardVariantProps<T>[P], null>
}>;

export type VariantPropOptions<T extends (...args: any) => any, P extends keyof VariantProps<T>> = VariantProps<T>[P];