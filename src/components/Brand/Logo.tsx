import { mergeProps } from 'solid-js';

export function Logo(_props: {
    width?: number | string;
    height?: number | string;
}) {
    const props = mergeProps({ width: 'auto', height: 'auto' }, _props);
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={props.width}
            height={props.height}
            viewBox="0 0 100 100"
        >
            <title>{'Logo of leafal.io'}</title>
            <path
                d="M 35,10
          c 30,0 25,45 65,45
          q -10,35 -50,35
          c -35,0 -50,-30 -50,-45
          q 0,-15 10,-15
          c 30,0 25,45 65,35
          c -30,0 -25,-45 -62.5,-45
          c 0,0 7.5,-10 22.5,-10
          z"
                fill="#3DAD2C"
            />
        </svg>
    );
}
