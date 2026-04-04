// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hack Club Wiki',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/hackclub/hackclub' }],
			sidebar: [
				{
					label: 'Home',
					items: [
						{ label: 'Welcome', slug: 'docs' },
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
