import { createRouter } from 'sv-router'
import BaseLayout from './lib/layout/BaseLayout.svelte'
import GameLayout from './lib/layout/GameLayout.svelte'
export const { p, navigate, isActive, route } = createRouter({
	'/': {
		'/': () => import('./routes/Start.svelte'),
		layout: BaseLayout
	},
	'/game': {
		'/': () => import('./game/Game.svelte'),
		layout: GameLayout
	},
	'/map': { '/': () => import('./routes/Map.svelte'), layout: GameLayout },
	'/settings': {
		'/': () => import('./routes/Settings.svelte'),
		layout: BaseLayout
	}
})
