import { JSX, splitProps } from 'solid-js';
import style from '~/styles/components/Pages/Home/FeaturedBanner.module.scss';

export type SlideProps = {
    background?: string;
    thumbnail?: string;
    title?: string;
    description?: string;
};

export function BannerSlide(_props: JSX.HTMLElementTags['a'] & SlideProps) {
    const [props, rest] = splitProps(_props, [
        'background',
        'thumbnail',
        'title',
        'description',
    ]);

    return (
        <a href="" class={style.slide} {...rest}>
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
        </a>
    );
}

export function FeaturedBanner() {
    return (
        <div class={style.banner}>
            <BannerSlide
                background="https://raw.githubusercontent.com/leafal-io/celesteia/production/img/background.jpg"
                thumbnail="https://raw.githubusercontent.com/leafal-io/celesteia/production/img/thumbnail.jpg"
                title="Celesteia"
                description="Humankind's last hope spreads across the galaxy to rebuild humanity's glory."
            />
        </div>
    );
}
