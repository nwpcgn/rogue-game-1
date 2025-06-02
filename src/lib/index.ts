// Reexport your entry components here
//@index('./**/*.svelte', (f, _) => `export { default as ${_.pascalCase(f.name)} } from '${f.path}${f.ext}'`)
export { default as AppBar } from './AppBar.svelte'
export { default as Sprites } from './icons/sprites.svelte'
//@endindex

//@index('./utils/*.js', (f, _) => `export { default as ${f.name} } from '${f.path}'`)
export { default as clickOutside } from './utils/clickOutside'
export { default as copyToClip } from './utils/copyToClip'
// export { default as depaginate } from './utils/depaginate'
// export { default as distance } from './utils/distance'
// export { default as fetchData } from './utils/fetchData'
// export { default as gArr } from './utils/gArr'
// export { default as groupArray } from './utils/groupArray'
// export { default as loadImage } from './utils/loadImage'
// export { default as paginate } from './utils/paginate'
// export { default as randInt } from './utils/randInt'
export { default as randNum } from './utils/randNum'
export { default as shuffle } from './utils/shuffle'
export { default as sleep } from './utils/sleep'
// export { default as uuid } from './utils/uuid'
//@endindex

export const nav = [
	{
		name: 'Start',
		href: '/',
		icon: 'nwp-start',
		hidden: true
	},
	{
		name: 'Game',
		href: '/game',
		icon: 'nwp-game',
		hidden: false
	},
	{
		name: 'Map',
		href: '/map',
		icon: 'nwp-map-1',
		hidden: false
	},
	{
		name: 'Settings',
		href: '/settings',
		icon: 'nwp-options',
		hidden: false
	}
]
export const views = {
	nav: [
		{
			name: 'Start',
			href: '/',
			icon: 'nwp-start',
			hidden: false
		},
		{
			name: 'Game',
			href: '/game',
			icon: 'nwp-game',
			hidden: false
		},
		{
			name: 'Map',
			href: '/map',
			icon: 'nwp-map-1',
			hidden: false
		},
		{
			name: 'Settings',
			href: '/settings',
			icon: 'nwp-options',
			hidden: false
		}
	],
	sub: [
		{
			name: 'Analyze',
			href: '/game/stats',
			icon: 'nwp-bar',
			hidden: false
		},
		{
			name: 'Database',
			href: '/game/db',
			icon: 'nwp-db',
			hidden: false
		},
		{
			name: 'Storage',
			href: '/game/storage',
			icon: 'nwp-map-1',
			hidden: false
		},
		{
			name: 'User',
			href: '/game/user',
			icon: 'nwp-user',
			hidden: false
		},
		{
			name: 'Messages',
			href: '/game/msg',
			icon: 'nwp-mail',
			hidden: false
		},
		{
			name: 'Info',
			href: '/game/info',
			icon: 'nwp-info',
			hidden: false
		}
	],
	player: [
		{
			name: 'Name',
			href: '/game',
			icon: 'nwp-player',
			hidden: false
		},
		{
			name: 'Positon',
			href: '/game',
			icon: 'nwp-full-1',
			hidden: false
		},
		{
			name: 'Health',
			href: '/game',
			icon: 'nwp-shield',
			hidden: false
		},
		{
			name: 'Mana',
			href: '/game',
			icon: 'nwp-wheel',
			hidden: false
		},
		{
			name: 'Inventory',
			href: '/game',
			icon: 'nwp-server',
			hidden: false
		}
	],
	grid: [
		{
			name: 'Cols',
			href: '/game',
			icon: 'nwp-cols',
			hidden: false
		},
		{
			name: 'Rows',
			href: '/game',
			icon: 'nwp-rows',
			hidden: false
		},
		{
			name: 'Size',
			href: '/game',
			icon: 'nwp-height',
			hidden: false
		},
		{
			name: 'Items',
			href: '/game',
			icon: 'nwp-archive',
			hidden: false
		},
		{
			name: 'Enemys',
			href: '/game',
			icon: 'nwp-enemy',
			hidden: false
		},
		{
			name: 'New Map',
			href: '/game',
			icon: 'nwp-dice',
			hidden: false
		}
	]
}
