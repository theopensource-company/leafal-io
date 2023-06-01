import * as React from 'react';

export default function DefaultProfilePicture(
    props: JSX.IntrinsicElements['svg']
) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            {...props}
        >
            <defs>
                <clipPath id="clip">
                    <circle cx={50} cy={50} r={50} />
                </clipPath>
            </defs>

            <g clipPath="url(#clip)">
                <circle cx={50} cy={45} r={17.5} fill="currentColor" />
                <circle cx={50} cy={105} r={30} fill="currentColor" />
                <circle
                    cx={50}
                    cy={50}
                    r={50}
                    strokeWidth={15}
                    stroke="currentColor"
                    fill="transparent"
                />{' '}
            </g>
        </svg>
    );
}
