import { MockupProductMaker } from 'constants/Types/Products.types';
import { splitProps } from 'solid-js';
import { A } from 'solid-start';
import style from '~/styles/components/Product/Maker/Profile.module.scss';

export type MakerProfileProps = {
    maker: MockupProductMaker;
};

export function MakerProfile(_props: MakerProfileProps) {
    const [props] = splitProps(_props, ['maker']);

    return (
        <A href={`/store/maker/${props.maker.slug}`} class={style.profile}>
            <img class={style.avatar} src={props.maker.logo} />
            <span class={style.name}>{props.maker.name}</span>
        </A>
    );
}
