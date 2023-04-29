import { Apple } from './Apple';
import { Linux } from './Linux';
import { Windows11 } from './Windows11';

export const PlatformIcons = {
    windows: () => <Windows11 />,
    macosx: () => <Apple />,
    linux: () => <Linux />,
};
