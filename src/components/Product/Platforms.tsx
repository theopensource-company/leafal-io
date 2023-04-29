import { For, JSX, splitProps } from 'solid-js';
import { PlatformIcons } from '../Icons/Brands';

export type ProductPlatformsProps = {
    platformNames: string[];
};

export function ProductPlatforms(
    _props: ProductPlatformsProps & JSX.HTMLElementTags['div']
) {
    const [props, rest] = splitProps(_props, ['platformNames']);
    return (
        <>
            <div {...rest}>
                <For each={props.platformNames}>
                    {(platform) => {
                        const p = platform as 'windows' | 'macosx' | 'linux';
                        return PlatformIcons[p];
                    }}
                </For>
            </div>
        </>
    );
}
