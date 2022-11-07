import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import { dev } from '$app/environment';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        paths: {
            base: "/cs-src",
        },
        adapter: static_adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        })
    },
    appdir: 'internal',
};

export default config;