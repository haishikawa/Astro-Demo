import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import vue from '@astrojs/vue';
import vuetifyPlugin from 'vite-plugin-vuetify';
import mdx from '@astrojs/mdx';
import markdoc from '@astrojs/markdoc';

/**
 * Vuetify integration for Astro
 * @param {import('astro/config').Options} options
 * @returns {import('astro/config').AstroIntegration}
 */
function vuetify(options) {
	return {
		name: 'my-astro-vuetify-integration',
		hooks: {
			'astro:config:setup': ({ updateConfig }) => {
				updateConfig({
					vite: {
						ssr: {
							noExternal: ['vuetify'],
						},
						plugins: [vuetifyPlugin()],
					},
				});
			},
		},
	};
}

// https://astro.build/config
export default defineConfig({
	integrations: [
		vue({
			appEntrypoint: '/src/pages/_app',
		}),
		vuetify(),
		react(),
		mdx(),
		markdoc(),
	],
	site: 'https://haishikawa.github.io/',
	base: '/Astro-Demo',
});
