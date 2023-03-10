import { JSX } from 'solid-js';

export function PageContent(_props: JSX.HTMLElementTags['div']) {
    return (
        <div
            style={{
                display: 'flex',
                'flex-direction': 'column',
                gap: '3em',
            }}
            {..._props}
        />
    );
}
