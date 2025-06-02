import { createRouter } from 'sv-router'
import BaseLayout from './lib/layout/BaseLayout.svelte'
import GameLayout from './lib/layout/GameLayout.svelte'
import supabase from './lib/supabase.js'
export const { p, navigate, isActive, route } = createRouter({
	'/': {
		'/': () => import('./routes/Start.svelte'),
		layout: GameLayout
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
