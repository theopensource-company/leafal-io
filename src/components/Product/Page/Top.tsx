import { createEffect, createSignal, splitProps } from 'solid-js';
import { TProductRecord } from '~/library/Types/Product.types';
import style from '~/styles/components/Product/Page/Top.module.scss';
import { Column } from '../../Layout/Groups/Columns/Column';
import { ColumnBar } from '../../Layout/Groups/Columns/ColumnBar';
import { MainWrapper } from '../../Layout/MainWrapper';
import { Slideshow, SlideshowSlide } from '../../Slideshow';
import { ProductBackground } from '../Background';
import { ReceptionBar } from './ReceptionBar';

export type ProductTopProps = {
    product: TProductRecord;
};

export function ProductTop(_props: ProductTopProps) {
    const [props, rest] = splitProps(_props, ['product']);
    const [slides, setSlides] = createSignal<SlideshowSlide[]>([]);

    createEffect(() => {
        if (props.product.showcase) {
            setSlides(
                props.product.showcase.map((slide): SlideshowSlide => {
                    return {
                        video: slide.type === 'video' ? slide.source : '',
                        image: slide.type === 'image' ? slide.source : '',
                    };
                })
            );
        }
    });

    return (
        <>
            <ProductBackground
                product={props.product}
                interactive={false}
                {...rest}
            />
            <MainWrapper>
                <div class={style.details} tabIndex="0">
                    <ColumnBar>
                        <Column variant="twothird">
                            <div class={style.showcase}>
                                {props.product.showcase ? (
                                    <Slideshow slides={slides()} />
                                ) : (
                                    <div class={style.noshow}>
                                        <b>
                                            Words speak a thousand pictures...
                                        </b>
                                        <br />
                                        This game doesn't have anything to show
                                        here.
                                    </div>
                                )}
                            </div>
                        </Column>
                        <Column variant="onethird">
                            <div class={style.side}>
                                <div class={style.overview}>
                                    <div class={style.thumbnail}>
                                        <img src={props.product.thumbnail} />
                                    </div>
                                    <div class={style.public}>
                                        <div class={style.reception}>
                                            <ReceptionBar rating={0.6} />
                                        </div>
                                    </div>
                                    <div class={style.content}>
                                        <p class={style.text}>
                                            {props.product.overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </Column>
                    </ColumnBar>
                </div>
            </MainWrapper>
        </>
    );
}