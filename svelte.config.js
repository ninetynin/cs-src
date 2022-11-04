import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    // preprocess: preprocess(),
    preprocess: preprocess[preprocess()],

    kit: {
        // adapter: adapter()
        adapter: adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
        }),
        // adapter: staticAdapter({
        //     pages: 'build',
        //     assets: 'build',
        //     fallback: null,
        // }),
        target: '#svelte',
    }
};

export default config;