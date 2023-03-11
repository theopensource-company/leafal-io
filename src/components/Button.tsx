import { VariantPropOptions } from 'constants/Types/Helpers.types';
import { cva } from 'cva';
import { JSX, splitProps } from 'solid-js';
import style from '~/styles/components/Button.module.scss';

export const buttonStyle = cva([style.default], {
    variants: {
        intent: {
            default: [style.intentDefault],
            disabled: [style.intentDisabled],
        },
        size: {
            small: [style.sizeSmall],
            normal: [style.sizeNormal],
        },
    },
    defaultVariants: {
        intent: 'default',
        size: 'normal',
    },
});

export type ButtonSize = VariantPropOptions<typeof buttonStyle, 'size'>;
export type ButtonIntent = Exclude<
    VariantPropOptions<typeof buttonStyle, 'intent'>,
    'disabled'
>;
export type ButtonProps = {
    size?: ButtonSize;
    intent?: ButtonIntent;
};

export function Button(_props: JSX.HTMLElementTags['button'] & ButtonProps) {
    const [props, rest] = splitProps(_props, [
        'intent',
        'size',
        'class',
        'disabled',
    ]);

    return (
        <button
            class={buttonStyle({
                intent: props.disabled ? 'disabled' : props.intent,
                size: props.size,
                class: props.class,
            })}
            disabled={props.disabled}
            {...rest}
        />
    );
}
