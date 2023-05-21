import * as React from 'react';
import { BrandIcons } from '../Icons/Brands';

export function ProductPlatforms({
    platformNames,
}: {
    platformNames: string[];
}) {
    return (
        <>
            {platformNames.map((name) => {
                const p = name as 'windows' | 'macosx' | 'linux';
                const Icon = BrandIcons[p] || <></>;
                return <Icon key={name} />;
            })}
        </>
    );
}
