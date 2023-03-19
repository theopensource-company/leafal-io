import { VariantPropOptions } from 'constants/Types/Helpers.types';
import { cva } from 'cva';
import { createSignal, JSX, splitProps, useContext } from 'solid-js';
import styles from '~/styles/components/Layout/Groups/Tabs.module.scss';
import { TabsContext } from '.';
import { TabGroup } from './Group';
import { TabList } from './List';
import { TabPanel } from './Panel';

export function Tab(
    _props: JSX.HTMLElementTags['button'] & {
        default?: boolean;
        hidden?: boolean;
    }
) {
    const tabsContext = useContext(TabsContext);
    const [index, setIndex] = createSignal(-1);
    const [split, rest] = splitProps(_props, [
        'ref',
        'onClick',
        'default',
        'class',
        'hidden',
    ]);

    const active = () => index() == tabsContext?.activeIndex();

    const onClick: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent> = (
        event
    ) => {
        tabsContext?.setActiveIndex(index());

        if (typeof split.onClick == 'function') {
            split.onClick(event);
        } else if (split.onClick) {
            split.onClick[0](split.onClick[1], event);
        }
    };

    const classes = () =>
        tabStyles({
            state: split.hidden
                ? 'hidden'
                : rest.disabled
                ? 'disabled'
                : active()
                ? 'active'
                : 'idle',
            direction: tabsContext?.direction,
            class: split.class,
        });

    return (
        <button
            ref={(el) => {
                const assigned = tabsContext?.registerTab(el) ?? -1;
                setIndex(assigned);
                if (split.default) tabsContext?.setActiveIndex(assigned);

                if (typeof _props.ref == 'function') {
                    _props.ref(el);
                } else {
                    // eslint-disable-next-line solid/reactivity
                    _props.ref = el;
                }
            }}
            class={classes()}
            onClick={onClick}
            {...rest}
        />
    );
}

const tabStyles = cva([styles.tab], {
    variants: {
        state: {
            idle: [styles.tabIdle],
            active: [styles.tabActive],
            disabled: [styles.tabDisabled],
            hidden: [styles.tabHidden],
        },
        direction: {
            vertical: [styles.tabVertical],
            horizontal: [styles.tabHorizontal],
        },
    },
    defaultVariants: {
        state: 'idle',
        direction: 'vertical',
    },
});

export type TabState = VariantPropOptions<typeof tabStyles, 'state'>;

Tab.Group = TabGroup;
Tab.List = TabList;
Tab.Panel = TabPanel;
