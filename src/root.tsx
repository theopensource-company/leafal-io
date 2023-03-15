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
import { ModalBackdrop, openModalID } from './components/Layout/Modal';
import { Navbar } from './components/Layout/Navbar';
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
                <Link rel="preconnect" href="https://fonts.googleapis.com" />
                <Link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <Link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
                />
            </Head>
            <Body>
                <Suspense fallback={<p>Loading...</p>}>
                    <ErrorBoundary>
                        <div id="app">
                            <ModalBackdrop open={() => !!openModalID()} />
                            <Navbar />
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
