import { ComponentProps, splitProps } from 'solid-js';
import { A } from 'solid-start';

export function NavItem(_props: ComponentProps<typeof A>) {
    const [, rest] = splitProps(_props, []);
    return <A {...rest} />;
}
