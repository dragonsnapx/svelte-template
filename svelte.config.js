import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import replace from "@rollup/plugin-replace";
import json from "@rollup/plugin-json";
import { config } from 'dotenv';

/** @type {import('@sveltejs/kit').Config} */
const svelteConfig = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess({
		postcss: true,
	}),

	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: () => ({
			plugins: [replace({
				__api: JSON.stringify({
					env: {
						...config().parsed
					}
				}),
				delimiters: ['', '']
			}),
			json()
			]
		})
	}
};

export default svelteConfig;
