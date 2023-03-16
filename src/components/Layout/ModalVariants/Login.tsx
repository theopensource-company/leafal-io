import { JSX } from 'solid-js';
import { TextLogo } from '~/components/Brand/Logo';
import { Button } from '~/components/Button';
import Modal, { ModalProps } from '../Modal';

export function Login(_props: JSX.HTMLElementTags['div'] & ModalProps) {
    const submit = (e: Event) => {
        e.preventDefault();
    };

    return (
        <Modal {..._props}>
            <form onSubmit={submit}>
                <TextLogo animate={false} />
                <input type="text" name="identifier" />
                <input type="password" name="password" />
                <Button disabled={true}>Log in</Button>
            </form>
        </Modal>
    );
}
