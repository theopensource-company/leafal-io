import { ComponentProps, splitProps } from 'solid-js';
import { A } from 'solid-start';
import style from '~/styles/components/Product/Summary.module.scss';

export type SlideProps = {
    background?: string;
    thumbnail?: string;
    title?: string;
    description?: string;
};

export function BannerSlide(_props: ComponentProps<typeof A> & SlideProps) {
    const [props, rest] = splitProps(_props, [
        'background',
        'thumbnail',
        'title',
        'description',
        'class',
    ]);

    return (
        <A
            class={[style.slide, props.class].filter((a) => a).join(' ')}
            {...rest}
        >
            <div class={style.background}>
                <img src={props.background} />
            </div>
            <div class={style.foreground}>
                <div class={style.details} tabIndex="0">
                    <div class={style.thumbnail}>
                        <img src={props.thumbnail} />
                    </div>
                    <div class={style.text}>
                        <span class={style.title}>{props.title}</span>
                        <p class={style.description}>{props.description}</p>
                    </div>
                </div>
            </div>
        </A>
    );
}

export function ProductSummary() {
    return (
        <div class={style.banner}>
            <BannerSlide
                href="/store/celesteia"
                background="https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg"
                thumbnail="https://raw.githubusercontent.com/leafal-io/celesteia/production/img/thumbnail.jpg"
                title="Celesteia"
                description="Humankind's last hope spreads across the galaxy to rebuild humanity's glory."
            />
        </div>
    );
}
