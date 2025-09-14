import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.svx'], // keep mdsvex extensions

	preprocess: [mdsvex()],

	kit: {
		adapter: adapter(), // use Vercel adapter instead of auto
	}
};

export default config;
