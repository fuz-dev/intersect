// generated by src/routes/package.gen.ts

import type {Package_Json} from '@ryanatkn/gro/package_json.js';
import type {Src_Json} from '@ryanatkn/gro/src_json.js';

export const package_json = {
	name: 'svelte-intersect',
	description: 'a Svelte action for IntersectionObserver',
	version: '0.12.1',
	public: true,
	license: 'MIT',
	type: 'module',
	homepage: 'https://svelte-intersect.ryanatkn.com/',
	repository: 'https://github.com/ryanatkn/svelte-intersect',
	engines: {node: '>=20.10'},
	scripts: {
		start: 'gro dev',
		dev: 'gro dev',
		build: 'gro build',
		test: 'gro test',
		deploy: 'gro deploy',
	},
	files: ['dist'],
	peerDependencies: {svelte: '*'},
	devDependencies: {
		'@changesets/changelog-git': '^0.2.0',
		'@ryanatkn/belt': '^0.20.6',
		'@ryanatkn/eslint-config': '^0.1.0',
		'@ryanatkn/fuz': '^0.91.3',
		'@ryanatkn/fuz_code': '^0.11.0',
		'@ryanatkn/gro': '^0.112.4',
		'@sveltejs/adapter-static': '^3.0.1',
		'@sveltejs/kit': '^2.5.2',
		'@sveltejs/package': '^2.2.7',
		'@sveltejs/vite-plugin-svelte': '^3.0.2',
		'@typescript-eslint/eslint-plugin': '^7.1.1',
		'@typescript-eslint/parser': '^7.1.1',
		eslint: '^8.57.0',
		'eslint-plugin-svelte': '^2.35.1',
		prettier: '^3.2.5',
		'prettier-plugin-svelte': '^3.2.2',
		'prism-svelte': '^0.5.0',
		prismjs: '^1.29.0',
		svelte: '^4.2.12',
		'svelte-check': '^3.6.6',
		tslib: '^2.6.2',
		typescript: '^5.3.3',
		uvu: '^0.5.6',
	},
	eslintConfig: {root: true, extends: '@ryanatkn'},
	prettier: {
		plugins: ['prettier-plugin-svelte'],
		useTabs: true,
		printWidth: 100,
		singleQuote: true,
		bracketSpacing: false,
		overrides: [{files: 'package.json', options: {useTabs: false}}],
	},
	exports: {'.': {default: './dist/index.js', types: './dist/index.d.ts'}},
} satisfies Package_Json;

export const src_json = {
	name: 'svelte-intersect',
	version: '0.12.1',
	modules: {
		'.': {
			path: 'index.ts',
			declarations: [
				{name: 'Intersect_Params', kind: 'type'},
				{name: 'Intersect_Params_Or_Callback', kind: 'type'},
				{name: 'intersect', kind: 'function'},
				{name: 'On_Intersect', kind: 'type'},
				{name: 'Intersect_State', kind: 'type'},
				{name: 'On_Disconnect', kind: 'type'},
				{name: 'Disconnect_State', kind: 'type'},
			],
		},
	},
} satisfies Src_Json;

// generated by src/routes/package.gen.ts
