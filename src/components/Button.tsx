import { JSX } from "solid-js";
import style from "~/styles/components/Button.module.scss";
import { cva } from "cva";
import { VariantPropOptions } from "constants/Types/helpers.types";

export const buttonStyle = cva([style.reset], {
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
    intent: "default",
    size: "normal",
  },
});

export type ButtonSize = VariantPropOptions<typeof buttonStyle, 'size'>;
export type ButtonIntent = Exclude<VariantPropOptions<typeof buttonStyle, 'intent'>, 'disabled'>;
export type ButtonProps = {
    size: ButtonSize,
    intent: ButtonIntent
};

export function Button({
  intent,
  size,

  class: className,
  disabled,

  ...rest
}: JSX.HTMLElementTags["button"] & ButtonProps) {
  return (
    <button
      class={buttonStyle({
        intent: disabled ? 'disabled' : intent,
        size,
        className,
      })}
      disabled={disabled}
      {...rest}
    />
  );
}
