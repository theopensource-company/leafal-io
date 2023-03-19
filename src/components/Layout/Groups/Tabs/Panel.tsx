import { createSignal, JSX, splitProps, useContext } from 'solid-js';
import { TabsContext } from '.';

export function TabPanel(_props: JSX.HTMLElementTags['div']) {
    const tabsContext = useContext(TabsContext);
    const [index, setIndex] = createSignal(-1);
    const [split, rest] = splitProps(_props, ['ref']);

    const active = () => index() == tabsContext?.activeIndex();

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
            style={{
                display: active() ? undefined : 'none',
            }}
            {...rest}
        />
    );
}
