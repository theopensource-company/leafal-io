import devTools from 'solid-devtools/vite';
import deno from 'solid-start-deno';
import solid from 'solid-start/vite';
import { defineConfig } from 'vite';

export default defineConfig({
    plugins: [
        devTools(),
        solid({
            adapter: deno(),
        }),
    ],
});
