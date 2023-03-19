import { cva } from 'cva';
import { createSignal, JSX, splitProps, useContext } from 'solid-js';
import styles from '~/styles/components/Layout/Groups/Tabs.module.scss';
import { TabsContext } from '.';

export function TabPanel(_props: JSX.HTMLElementTags['div']) {
    const tabsContext = useContext(TabsContext);
    const [index, setIndex] = createSignal(-1);
    const [split, rest] = splitProps(_props, ['ref', 'class']);

    const active = () => index() == tabsContext?.activeIndex();
    const classes = () =>
        tabPanelStyles({
            state: active() ? 'active' : 'idle',
            class: split.class,
        });

    return (
        <div
            ref={(el) => {
                setIndex(tabsContext?.registerPanel(el) ?? -1);

                if (typeof split.ref == 'function') {
                    split.ref(el);
                } else {
                    // eslint-disable-next-line solid/reactivity
                    split.ref = el;
                }
            }}
            class={classes()}
            {...rest}
        />
    );
}

export const tabPanelStyles = cva([styles.tabPanel], {
    variants: {
        state: {
            active: [styles.tabPanelActive],
            idle: [styles.tabPanelIdle],
        },
    },
    defaultVariants: {
        state: 'idle',
    },
});
