import * as React from 'react';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BrandIcons } from '../Icons/Brands';

export function ProductPlatforms({
    platformNames,
}: {
    platformNames: string[];
}) {
    const [randIds, setRandIds] = useState<string[]>([]);

    useEffect(
        () =>
            setRandIds(
                Array(platformNames.length)
                    .fill(1)
                    .map(() => `lfl:dropdown:${uuidv4()}`)
            ),
        [platformNames.length]
    );

    return (
        <>
            {platformNames.map((name, i) => {
                const p = name as 'windows' | 'macosx' | 'linux';
                const Icon = BrandIcons[p] || <></>;
                return <Icon key={randIds[i] ?? '' + i} />;
            })}
        </>
    );
}
