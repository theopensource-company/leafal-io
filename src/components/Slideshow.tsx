import { createEffect, createSignal, For, JSX, splitProps } from 'solid-js';
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

export type SlideshowSelectorProps = {
    activeSlideFunction: (v: number) => number;
    index: number;
};

export function SlideSelector(
    _props: JSX.HTMLElementTags['div'] & SlideshowSelectorProps
) {
    const [props, rest] = splitProps(_props, ['activeSlideFunction', 'index']);
    return (
        <div
            class={style.selector}
            // eslint-disable-next-line solid/reactivity
            onClick={() => props.activeSlideFunction(props.index)}
            {...rest}
        />
    );
}

export function Slideshow(_props: SlideshowProps) {
    const [props] = splitProps(_props, ['slides']);

    const [activeSlide, setActiveSlide] = createSignal(-1);
    const [time, setTime] = createSignal(0);

    let x: NodeJS.Timer;

    createEffect(() => {
        clearTimeout(x);
        if (props.slides.length > 1) {
            console.log(activeSlide());

            x = setTimeout(() => {
                setActiveSlide(activeSlide() + 1);
                if (activeSlide() >= props.slides.length) setActiveSlide(0);

                setTime(5000);
            }, time());
        }
    });

    return (
        <div class={style.container}>
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

            <div class={style.selectors}>
                <For each={props.slides}>
                    {(s, index) => {
                        return (
                            <SlideSelector
                                class={`${style.selector} ${
                                    index() == activeSlide()
                                        ? style.active
                                        : index() < activeSlide()
                                        ? style.viewed
                                        : ''
                                }`}
                                activeSlideFunction={setActiveSlide}
                                index={index()}
                            />
                        );
                    }}
                </For>
            </div>
        </div>
    );
}
