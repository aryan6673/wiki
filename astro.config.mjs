// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hack Club Wiki',
			logo: {
				src: './public/logo.png',
				alt: 'Hack Club Logo',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hackclub/wiki' }],
			customCss: [
				'./globals.css',
				'./src/styles/custom.css'
			],
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Welcome', slug: 'index' },
					],
				},
				{
					label: 'Community',
					autogenerate: { directory: 'community' },
				},
				{
					label: 'Projects',
					autogenerate: { directory: 'projects' },
				},
			],
		}),
	],
});
