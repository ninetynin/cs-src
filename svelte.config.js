import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
// import { dev } from '$app/environment';


const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    // kit: {
    //     adapter: adapter()
    // }

    kit: {
        adapter: adapter({
            // default options are shown. On some platforms
            // these options are set automatically — see below
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        })
    },
    paths: {
        base: "/cs-src"
    },
    appdir: 'internal',
};

export default config;