import { cva } from 'cva';
import { JSX, splitProps } from 'solid-js';
import style from '~/styles/components/Product/Page/Section.module.scss';

const sectionStyle = cva([style.section], {
    variants: {
        wrap: {
            yes: [style.wrapped],
            no: [],
        },
    },
    defaultVariants: {
        wrap: 'no',
    },
});

export type SectionProps = {
    wrapped: boolean;
};

export function ProductPageSection(
    _props: JSX.HTMLElementTags['div'] & SectionProps
) {
    const [props, rest] = splitProps(_props, ['wrapped']);
    return (
        <div
            class={sectionStyle({ wrap: props.wrapped ? 'yes' : 'no' })}
            {...rest}
        />
    );
}

export function ProductPageSectionHeading(_props: JSX.HTMLElementTags['span']) {
    return <span class={style.heading} {..._props} />;
}
