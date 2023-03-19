import { createEffect, onCleanup } from 'solid-js';
import { Tab } from '~/components/Layout/Groups/Tabs';
import styles from '~/styles/components/Development/Suite.module.scss';
import Modal, { createModalState } from '../Layout/Modal';

export default function DevelopmentSuite() {
    const keyword = 'taswell';
    const { open, onClose, onOpen } = createModalState();

    createEffect(() => {
        let hot = false;
        let secret = '';

        const onKeyStroke = function (e: KeyboardEvent) {
            if (e.key == 'Escape') {
                if (hot && secret == keyword) {
                    hot = false;
                    secret = '';
                    onOpen();
                } else {
                    hot = true;
                }

                return;
            } else if (hot && !e.code.startsWith(e.key)) {
                secret += e.key;
                if (keyword.startsWith(secret)) return;
            }

            hot = false;
            secret = '';
        };

        document.addEventListener('keyup', onKeyStroke);
        onCleanup(() => document.removeEventListener('keyup', onKeyStroke));
    });

    return (
        <Modal
            open={open}
            onClose={onClose}
            closeByEscape={false}
            closeByClickOutside={false}
            class={styles.modal}
        >
            <Tab.Group direction="horizontal">
                <Tab.List>
                    <Tab default>Migrate database</Tab>
                </Tab.List>
                <Tab.Panel>Working on it :)</Tab.Panel>
            </Tab.Group>
        </Modal>
    );
}
