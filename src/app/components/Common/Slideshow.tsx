'use client';
import * as React from 'react';

import styles from './Slideshow.module.scss';

import { useEffect, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export type SlideshowSlide = {
    video?: string;
    image?: string;
};

export function Slideshow({ slides }: { slides: SlideshowSlide[] }) {
    const [randIds, setRandIds] = useState<string[]>([]);

    useEffect(
        () =>
            setRandIds(
                Array(slides.length)
                    .fill(1)
                    .map(() => `lfl:slideshow:${uuidv4()}`)
            ),
        [slides.length]
    );

    const [activeSlide, setActiveSlide] = useState<number>(0);

    const timeoutRef = useRef<NodeJS.Timeout>();

    const resetTimeout = () =>
        timeoutRef.current && clearTimeout(timeoutRef.current);

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setActiveSlide((prev) =>
                    prev === slides.length - 1 ? 0 : prev + 1
                ),
            5000
        );

        return () => {
            resetTimeout();
        };
    }, [activeSlide, slides.length]);

    return (
        <div className={styles.container}>
            <div className={styles.slides}>
                {slides.map((slide, i) => (
                    <div
                        key={randIds[i] ?? '' + i}
                        className={[
                            styles.slide,
                            activeSlide == i ? styles.active : '',
                        ].join(' ')}
                    >
                        {slide.video && <video src={slide.video} />}

                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        {slide.image && <img src={slide.image} alt={''} />}
                    </div>
                ))}
            </div>

            <div className={styles.selectors}>
                {slides.map((_, i) => (
                    <div
                        key={`${randIds[i] ?? '' + i}:selector`}
                        className={[
                            styles.selector,
                            activeSlide == i ? styles.active : '',
                        ].join(' ')}
                        onClick={() => setActiveSlide(i)}
                    />
                ))}
            </div>
        </div>
    );
}
