// // import adapter from '@sveltejs/adapter-auto';
// // import preprocess from 'svelte-preprocess';

// // /** @type {import('@sveltejs/kit').Config} */
// // const config = {
// //     // Consult https://github.com/sveltejs/svelte-preprocess
// //     // for more information about preprocessors
// //     // preprocess: preprocess(),
// //     preprocess: preprocess[preprocess()],

// //     kit: {
// //         // adapter: adapter()
// //         adapter: adapter({
// //             pages: 'build',
// //             assets: 'build',
// //             fallback: null,
// //         }),
// //         // adapter: staticAdapter({
// //         //     pages: 'build',
// //         //     assets: 'build',
// //         //     fallback: null,
// //         // }),
// //         target: '#svelte',
// //     }
// // };

// // export default config;


// // svelte.config.js
// import adapter from '@sveltejs/adapter-static';
// import static_adapter from '@sveltejs/adapter-static';

// export default {
//     kit: {
//         // adapter: adapter({
//         //     // default options are shown. On some platforms
//         //     // these options are set automatically — see below
//         //     pages: 'build',
//         //     assets: 'build',
//         //     fallback: null,
//         //     precompress: false,
//         //     strict: true
//         // })
//         adapter: static_adapter({
//             pages: 'build',
//             assets: 'build',
//             fallback: null,
//             precompress: false,
//             strict: true
//         }),
//         paths: {
//             base: '/CS-SRC',
//             // assets: '/CS-SRC/static'
//         }
//     }
// };


// -- https://github.com/sveltejs/kit/blob/7d985a152d865c28352da46a63f959d881c1a094/packages/adapter-static/README.md#github-pages
// svelte.config.js

import { dev } from '$app/environment';
import adapter from '@sveltejs/adapter-static';

export default {
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
        base: dev ? '' : '/CS-SRC',
        assets: dev ? '' : '/CS-SRC/static'
    },
    appdir: 'internal',
};