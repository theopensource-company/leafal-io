import { JSX, createSignal } from 'solid-js';
import { TextLogo } from '~/components/Brand/Logo';
import { Button } from '~/components/Button';
import { SurrealQuery, SurrealSignin } from '~/library/Surreal';
import Modal, { ModalProps } from '../Modal';

export function Login(_props: JSX.HTMLElementTags['div'] & ModalProps) {
    const [identifier, setIdentifier] = createSignal<string>('');
    const [password, setPassword] = createSignal<string>('');

    const submit = async (e: Event) => {
        e.preventDefault();

        await SurrealSignin(identifier(), password()).catch((err) =>
            console.error(err)
        );

        const users = await SurrealQuery('SELECT * FROM user;');
        console.log(users);
    };

    return (
        <Modal {..._props}>
            <form onSubmit={submit}>
                <TextLogo animate={false} />
                <input
                    type="text"
                    onChange={(e) => setIdentifier(e.currentTarget.value)}
                    name="identifier"
                    placeholder="Username or e-mail..."
                />
                <input
                    type="password"
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    name="password"
                    placeholder="Password..."
                />
                <Button>Log in</Button>
            </form>
        </Modal>
    );
}
