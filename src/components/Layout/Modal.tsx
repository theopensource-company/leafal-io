import { VariantPropOptions } from 'constants/Types/Helpers.types';
import { cva } from 'cva';
import {
    Accessor,
    createContext,
    createEffect,
    createMemo,
    createSignal,
    createUniqueId,
    JSX,
    onCleanup,
    splitProps,
    useContext,
} from 'solid-js';
import styles from '~/styles/components/Layout/Modal.module.scss';

export default function Modal(_props: ModalProps) {
    const [
        {
            open,
            class: className,
            onClose,
            children,
            closeByClickOutside,
            closeByEscape,
        },
        rest,
    ] = splitProps(_props, [
        'ref',
        'open',
        'class',
        'onClose',
        'children',
        'closeByClickOutside',
        'closeByEscape',
    ]);

    //props: https://stackoverflow.com/a/42234988
    createEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                closeByClickOutside !== false &&
                open() &&
                event.target &&
                _props.ref &&
                !_props.ref.contains(event.target as Node)
            ) {
                onClose();
            }
        }

        function handleEscapeKey(event: KeyboardEvent) {
            if (closeByEscape !== false && open() && event.key == 'Escape') {
                onClose();
            }
        }

        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('keyup', handleEscapeKey);

        onCleanup(() => {
            document.removeEventListener('mousedown', handleClickOutside);
            document.removeEventListener('keyup', handleEscapeKey);
        });
    });

    return (
        <ModalContext.Provider value={{ open, onClose }}>
            <div
                ref={_props.ref}
                class={modalStyle({
                    state: open() ? 'opened' : 'closed',
                    class: className,
                })}
                {...rest}
            >
                {children}
            </div>
        </ModalContext.Provider>
    );
}

// Modal backdrop
export function ModalBackdrop(
    _props: JSX.HTMLElementTags['div'] & {
        open: Accessor<boolean>;
    }
) {
    const [{ class: className, children, open }, rest] = splitProps(_props, [
        'class',
        'children',
        'open',
    ]);

    return (
        <div
            class={modalBackdropStyle({
                state: open() ? 'opened' : 'closed',
                class: className,
            })}
            {...rest}
        >
            {children}
        </div>
    );
}

// Modal state
const [openModalID, setOpenModalID] = createSignal<string | undefined>();
export { openModalID };
export function createModalState({ defaultOpen }: { defaultOpen?: boolean }) {
    const id = createUniqueId();
    const open = createMemo(() => openModalID() === id);
    const setOpen = (open: boolean) => setOpenModalID(open ? id : undefined);
    const toggleOpen = () => setOpenModalID(open() ? id : undefined);
    const onOpen = () => setOpenModalID(id);
    const onClose = () => setOpenModalID(undefined);

    onCleanup(() => {
        if (open()) setOpenModalID(undefined);
    });

    if (defaultOpen) onOpen();
    return { open, setOpen, onOpen, onClose, toggleOpen };
}

// Modal Context & ... helper functions
export const ModalContext =
    createContext<Pick<ModalProps, 'open' | 'onClose'>>();

export function useCloseModal() {
    const context = useContext(ModalContext);
    return context?.onClose;
}

export function useModalOpen() {
    const context = useContext(ModalContext);
    return context?.open;
}

// Modal styles
export const modalStyle = cva([styles.modal], {
    variants: {
        state: {
            opened: [styles.opened],
            closed: [styles.closed],
        },
    },
    defaultVariants: {
        state: 'closed',
    },
});

export const modalBackdropStyle = cva([styles.backdrop], {
    variants: {
        state: {
            opened: [styles.backdropOpened],
            closed: [styles.backdropClosed],
        },
    },
    defaultVariants: {
        state: 'closed',
    },
});

// Modal types
export type ModalState = VariantPropOptions<typeof modalStyle, 'state'>;
export type ModalProps = JSX.HTMLElementTags['div'] & {
    open: Accessor<boolean>;
    onClose: () => unknown;
    ref?: HTMLDivElement;
    closeByEscape?: boolean;
    closeByClickOutside?: boolean;
};
