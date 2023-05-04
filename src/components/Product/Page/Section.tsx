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

export type ProductPageSectionProps = {
    wrapped: boolean;
};

export function ProductPageSection(
    _props: JSX.HTMLElementTags['div'] & ProductPageSectionProps
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

export type ProductPageSectionLinkProps = {
    icon?: JSX.Element;
};

export function ProductPageSectionLink(
    _props: ProductPageSectionLinkProps & JSX.HTMLElementTags['a']
) {
    const [props, rest] = splitProps(_props, ['icon', 'children']);

    return (
        <a class={style.link} {...rest}>
            {props.icon && <div class={style.iconContainer}>{props.icon}</div>}
            {props.children}
        </a>
    );
}
