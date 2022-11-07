import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import { dev } from '$app/environment';
import static_adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: preprocess(),

    kit: {
        adapter: static_adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        })
    },
    paths: {
        base: "/cs-src",
    },
    appdir: 'internal',
};

export default config;