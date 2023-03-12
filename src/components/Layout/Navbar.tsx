import { cva } from 'cva';
import { ComponentProps, JSX, splitProps } from 'solid-js';
import { A } from 'solid-start';
import style from '~/styles/components/Layout/Navbar.module.scss';
import { Logo } from '../Brand/Logo';
import { Button } from '../Button';

export const navbarStyle = cva([style.default]);

export function NavItem(_props: ComponentProps<typeof A>) {
    const [, rest] = splitProps(_props, []);
    return <A class={style.item} {...rest} />;
}

export type NavbarProps = object;

export function Navbar(props: JSX.HTMLElementTags['div'] & NavbarProps) {
    return (
        <div
            class={navbarStyle({
                class: props.class,
            })}
        >
            <div class={style.content}>
                <NavItem href="/" tabIndex="0">
                    <div class={style.logo}>
                        <Logo />
                        <span>leafal.io</span>
                    </div>
                </NavItem>
                <div class={style.links} />
                <div class={style.account}>
                    <Button size="normal">Log in</Button>
                </div>
            </div>
        </div>
    );
}
