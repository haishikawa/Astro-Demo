import type { App } from 'vue';
import { createVuetify, ThemeDefinition } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default function setup(app: App) {
	const myCustomLightTheme = {
		dark: false,
		colors: {
			main: '#d71718',
			positive: '#0adc5a',
			negative: '#ff0000',
			warning: '#ffff00',
			default: '#4c4c4c',
			info: '#3f51b5',
			btn_positive: '#00c4b4',
			btn_default: '#a6a6a6',
			btn_negative: '#4c4c4c',
			bg_side_menu: '#2b94e5',
			rintsu: '#02CBE2',
			buppin: '#F9A825',
			sharyo: '#48E257',
		},
	};
	const vuetify = createVuetify({
		ssr: true,
		components,
		directives,
		theme: {
			defaultTheme: 'myCustomLightTheme',
			themes: {
				myCustomLightTheme,
			},
		},
	});
	app.use(vuetify);
}
