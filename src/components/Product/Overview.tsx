import { MockupProduct } from 'constants/Types/Products.types';
import { createEffect, createSignal, splitProps } from 'solid-js';
import style from '~/styles/components/Product/Overview.module.scss';
import { Column } from '../Layout/Groups/Columns/Column';
import { ColumnBar } from '../Layout/Groups/Columns/ColumnBar';
import { MainWrapper } from '../Layout/MainWrapper';
import { Slideshow, SlideshowSlide } from '../Slideshow';
import { ProductBanner } from './Banner';
import { MakerProfile } from './Maker/Profile';
import { ReceptionBar } from './ReceptionBar';

export type SummaryProps = {
    product: MockupProduct;
};

export function ProductOverview(_props: SummaryProps) {
    const [props, rest] = splitProps(_props, ['product']);
    const [slides, setSlides] = createSignal<SlideshowSlide[]>([]);

    createEffect(() => {
        if (props.product.showcase) {
            setSlides(
                props.product.showcase.slides.map((slide): SlideshowSlide => {
                    return {
                        video: slide.video,
                        image: slide.image,
                    };
                })
            );
        }
    });

    return (
        <>
            <ProductBanner
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
                                        {props.product.reception && (
                                            <div class={style.reception}>
                                                <ReceptionBar
                                                    rating={
                                                        props.product.reception
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                    <div class={style.content}>
                                        <p class={style.text}>
                                            {props.product.overview}
                                        </p>
                                        <MakerProfile
                                            maker={{
                                                slug: 'leafal-io',
                                                name: 'leafal.io',
                                                logo: '/images/icons/icon_512x512.png',
                                            }}
                                        />
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
