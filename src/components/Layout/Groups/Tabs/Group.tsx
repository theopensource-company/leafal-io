import { cva } from 'cva';
import { createSignal, JSX, splitProps } from 'solid-js';
import { VariantPropOptions } from '~/library/Types/Helpers.types';
import styles from '~/styles/components/Layout/Groups/Tabs.module.scss';
import { TabsContext } from '.';

export function TabGroup(
    _props: JSX.HTMLElementTags['div'] & {
        direction?: TabsDirection;
    }
) {
    const [activeIndex, setActiveIndex] = createSignal(-1);
    const [_tabs, setTabs] = createSignal<HTMLButtonElement[]>([]);
    const [_panels, setPanels] = createSignal<HTMLDivElement[]>([]);
    const [{ direction, class: className }, rest] = splitProps(_props, [
        'class',
        'direction',
    ]);

    const registerTab = (el: HTMLButtonElement) =>
        setTabs((prev) => [...prev, el]).length - 1;
    const registerPanel = (el: HTMLDivElement) =>
        setPanels((prev) => [...prev, el]).length - 1;
    const removeTab = (index: number) =>
        setTabs((prev) => prev.splice(index, 1));
    const removePanel = (index: number) =>
        setPanels((prev) => prev.splice(index, 1));

    const classes = () =>
        tabGroupStyles({
            direction,
            className,
        });

    return (
        <TabsContext.Provider
            value={{
                activeIndex,
                setActiveIndex,
                registerPanel,
                registerTab,
                removePanel,
                removeTab,
                direction: direction ?? 'vertical',
            }}
        >
            <div class={classes()} {...rest} />
        </TabsContext.Provider>
    );
}

export const tabGroupStyles = cva([styles.tabGroup], {
    variants: {
        direction: {
            vertical: [styles.tabGroupVertical],
            horizontal: [styles.tabGroupHorizontal],
        },
    },
    defaultVariants: {
        direction: 'vertical',
    },
});

export type TabsDirection = VariantPropOptions<
    typeof tabGroupStyles,
    'direction'
>;
