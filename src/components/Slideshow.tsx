import {
    createEffect,
    createSignal,
    For,
    JSX,
    onCleanup,
    splitProps,
} from 'solid-js';
import style from '~/styles/components/Slideshow.module.scss';

export type SlideshowProps = {
    slides: SlideshowSlide[];
};

export type SlideshowSlide = {
    video?: string;
    image?: string;
    caption?: string;
};

export function Slide(_props: JSX.HTMLElementTags['div'] & SlideshowSlide) {
    const [props, rest] = splitProps(_props, ['video', 'image', 'caption']);

    return (
        <div {...rest}>
            {props.video && <video src={props.video} />}
            {props.image && <img src={props.image} />}

            {props.caption && (
                <span class={style.caption}>{props.caption}</span>
            )}
        </div>
    );
}

export function Slideshow(_props: SlideshowProps) {
    const [props] = splitProps(_props, ['slides']);

    const [activeSlide, setActiveSlide] = createSignal(0);

    createEffect(() => {
        if (props.slides.length > 1) {
            const x = setInterval(() => {
                setActiveSlide(activeSlide() + 1);
                if (activeSlide() >= props.slides.length) setActiveSlide(0);
            }, 5000);

            onCleanup(() => clearInterval(x));
        }
    });

    return (
        <div class={style.slideshow}>
            <For each={props.slides}>
                {(s, index) => {
                    return (
                        <Slide
                            class={`${style.slide} ${
                                index() == activeSlide() ? style.active : ''
                            }`}
                            {...s}
                        />
                    );
                }}
            </For>
        </div>
    );
}
