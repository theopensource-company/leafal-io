import { cva } from 'cva';
import { ComponentProps, JSX, splitProps } from 'solid-js';
import { A } from 'solid-start';
import style from '~/styles/components/Layout/Navbar.module.scss';
import { Logo, TextLogo } from '../Brand/Logo';
import { Button } from '../Button';
import Modal, { createModalState } from './Modal';
import { Login } from './ModalVariants/Login';

export const navbarStyle = cva([style.default]);

export function NavItem(_props: ComponentProps<typeof A>) {
    const [, rest] = splitProps(_props, []);
    return <A class={style.item} {...rest} />;
}

export type NavbarProps = object;

export function Navbar(props: JSX.HTMLElementTags['div'] & NavbarProps) {
    const { open, onClose, onOpen } = createModalState();

    return (
        <>
            <div
                class={navbarStyle({
                    class: props.class,
                })}
            >
                <div class={style.content}>
                    <NavItem href="/" tabIndex="0">
                        <TextLogo />
                    </NavItem>
                    <div class={style.links} />
                    <div class={style.account}>
                        <Button size="normal" onClick={onOpen}>
                            Log in
                        </Button>
                    </div>
                </div>
            </div>

            <Login open={open} onClose={onClose} />
        </>
    );
}
