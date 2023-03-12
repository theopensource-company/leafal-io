import { cva } from 'cva';
import { JSX } from 'solid-js';
import style from '~/styles/components/Layout/Navbar.module.scss';
import { Logo } from '../Brand/Logo';
import { Button } from '../Button';
import { NavItem } from './NavItem';

export const navbarStyle = cva([style.default]);

export type NavbarProps = object;

export function Navbar(props: JSX.HTMLElementTags['div'] & NavbarProps) {
    return (
        <div
            class={navbarStyle({
                class: props.class,
            })}
        >
            <div class={style.content}>
                <NavItem href="/" class={style.logo}>
                    <Logo />
                    <span>leafal.io</span>
                </NavItem>
                <div class={style.links} />
                <div class={style.account}>
                    <Button size="normal">Log in</Button>
                </div>
            </div>
        </div>
    );
}
