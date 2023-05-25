import * as React from 'react';

import { Metadata } from 'next';
import { LibraryPage } from './components/LibraryPage';

export const metadata: Metadata = {
    icons: ['/favicon.ico', '/logo.svg'],
    title: 'Your Library - leafal.io',
};

export default function Library() {
    return (
        <main>
            <LibraryPage />
        </main>
    );
}
