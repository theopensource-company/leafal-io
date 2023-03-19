import { cva } from 'cva';
import { JSX, splitProps, useContext } from 'solid-js';
import styles from '~/styles/components/Layout/Groups/Tabs.module.scss';
import { TabsContext } from '.';

export function TabList(_props: JSX.HTMLElementTags['div']) {
    const tabsContext = useContext(TabsContext);
    const [{ class: className }, rest] = splitProps(_props, ['class']);

    const classes = () =>
        tabListStyles({
            direction: tabsContext?.direction,
            className,
        });

    return <div class={classes()} {...rest} />;
}

export const tabListStyles = cva([styles.tabList], {
    variants: {
        direction: {
            vertical: [styles.tabListVertical],
            horizontal: [styles.tabListHorizontal],
        },
    },
    defaultVariants: {
        direction: 'vertical',
    },
});
