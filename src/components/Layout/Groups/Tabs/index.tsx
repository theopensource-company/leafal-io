import { Accessor, createContext, Setter } from 'solid-js';
import { TabsDirection } from './Group';

export const TabsContext = createContext<{
    registerTab: (el: HTMLButtonElement) => number;
    registerPanel: (el: HTMLDivElement) => number;
    removeTab: (index: number) => unknown;
    removePanel: (index: number) => unknown;
    activeIndex: Accessor<number>;
    setActiveIndex: Setter<number>;
    direction: TabsDirection;
}>();

export { Tab } from './Tab';
