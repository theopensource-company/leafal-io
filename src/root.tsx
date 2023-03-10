// @refresh reload
import { Suspense } from 'solid-js';
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Link,
    Meta,
    Routes,
    Scripts,
    Title,
} from 'solid-start';
import './styles/root.scss';

export default function Root() {
    return (
        <Html lang="en">
            <Head>
                <Title>leafal.io</Title>
                <Meta charset="utf-8" />
                <Meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Link rel="icon shortcut" href="/logo.svg" />
            </Head>
            <Body>
                <Suspense>
                    <ErrorBoundary>
                        <div id="app">
                            <Routes>
                                <FileRoutes />
                            </Routes>
                        </div>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}
