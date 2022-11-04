// import adapter from '@sveltejs/adapter-auto';
// import preprocess from 'svelte-preprocess';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
//     // Consult https://github.com/sveltejs/svelte-preprocess
//     // for more information about preprocessors
//     // preprocess: preprocess(),
//     preprocess: preprocess[preprocess()],

//     kit: {
//         // adapter: adapter()
//         adapter: adapter({
//             pages: 'build',
//             assets: 'build',
//             fallback: null,
//         }),
//         // adapter: staticAdapter({
//         //     pages: 'build',
//         //     assets: 'build',
//         //     fallback: null,
//         // }),
//         target: '#svelte',
//     }
// };

// export default config;


// svelte.config.js
import adapter from '@sveltejs/adapter-static';
import static_adapter from '@sveltejs/adapter-static';

export default {
    kit: {
        // adapter: adapter({
        //     // default options are shown. On some platforms
        //     // these options are set automatically — see below
        //     pages: 'build',
        //     assets: 'build',
        //     fallback: null,
        //     precompress: false,
        //     strict: true
        // })
        adapter: static_adapter({
            pages: 'build',
            assets: 'build',
            fallback: null,
            precompress: false,
            strict: true
        }),
        paths: {
            base: '/',
            // assets: '/CS-SRC'
        }
    }
};