import { JSX } from 'solid-js';

import style from '~/styles/components/Product/Carousel.module.scss';

export function ProductCarousel(_props: JSX.HTMLElementTags['div']) {
    return <div class={style.default} {..._props} />;
}
