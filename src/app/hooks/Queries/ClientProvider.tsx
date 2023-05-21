'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React, { useState } from 'react';

export default function ClientProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [client] = useState(new QueryClient());

    return (
        <QueryClientProvider client={client}>{children}</QueryClientProvider>
    );
}
