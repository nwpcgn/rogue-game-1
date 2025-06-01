import generateMap from './generateMap'
import * as ROT from 'rot-js'

interface PlayerT {
	name: string
	stats: Stats
	items?: ItemEntity[] | null
}
interface Stats {
	hp: number
	atc: number
	def: number
	mana: number
}
interface ItemEntity {
	name: string
	type: string
	value: number
}
interface GridT {
	map?: (number[] | null)[] | null
	position: Position
	items?: GridEntity[] | null
	enemies?: GridEntity[] | null
}
interface Position {
	x: number
	y: number
}
interface GridEntity {
	x: number
	y: number
	slug: number
}
interface InventoryT {
	fighter?: FighterEntity[] | null
	loot?: ItemEntity[] | null
}
interface FighterEntity {
	name: string
	stats: Stats
}
interface Config {
	width: number
	height: number
	size: number
	type: string
}
function shuffleArray(array) {
	const copy = [...array]
	for (let i = copy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[copy[i], copy[j]] = [copy[j], copy[i]]
	}
	return copy
}

class Inventory {
	fighter: FighterEntity[] | null = $state()
	loot: ItemEntity[] | null = $state()
	constructor(fighter = [], loot = []) {
		this.fighter = fighter
		this.loot = loot
	}

	async loadLootFromUrl(url) {
		try {
			const res = await fetch(url)
			const data = await res.json()
			this.loot = shuffleArray(data.loot)
			this.fighter = shuffleArray(data.fighter)
		} catch (err) {
			console.error('Failed to load loot:', err)
		}
	}

	giveItemToPlayer(player) {
		if (this.loot.length > 0) {
			const item = this.loot.shift()
			player.items.push(item)
			return item
		} else {
			console.warn('No loot left to give.')
			return null
		}
	}
}
class Grid {
	display = $state()
	map?: (string[] | null)[] | null = $state()
	position: Position = $state()
	items?: GridEntity[] | null = $state()
	enemies?: GridEntity[] | null = $state()

	constructor(
		map = [
			[0, 0],
			[0, 0]
		],
		position = { x: 0, y: 0 },
		items = [],
		enemies = []
	) {
		this.map = map
		this.position = position
		this.items = items
		this.enemies = enemies
	}

	build(width = 40, height = 40, type = 'Digger') {
		const data = generateMap(width, height, type)
		// { map, rooms, items, freeCells, enemys, position }
		this.map = data.map
		this.items = data.items
		this.enemies = data.enemys
		this.position = data.position
	}

	initDisplay(el: HTMLDivElement) {
		this.display = new ROT.Display()
		el.appendChild(this.display.getContainer())
	}

	move(x, y) {
		this.position.x += x
		this.position.y += y
	}

	getCurrentTile() {
		return this.map[this.position.y]?.[this.position.x]
	}
}

class Player {
	name: string = $state()
	maxHp: number = $state()
	maxMana: number = $state()
	stats: Stats = $state()
	items: ItemEntity[] | null = $state()
	constructor(name = 'Mew', stats = { hp: 30, atc: 10, def: 6, mana: 10 }) {
		this.name = name
		this.stats = stats
		this.items = []
		this.maxHp = this.stats.hp
		this.maxMana = this.stats.mana
	}

	useItem(index) {
		return this.items.splice(index, 1)[0]
	}
}

class Game {
	player: PlayerT = $state()
	grid: GridT = $state()
	inventory: InventoryT = $state()
	config: Config = $state({
		width: 40,
		height: 40,
		size: 40,
		map: 6,
		type: 'Uniform'
	})
	style: string = $derived(
		`--grid-cols: ${this.config.width};--grid-rows: ${this.config.height};--grid-size: ${Math.floor(this.config.size / 2)}px;}`
	)
	constructor() {
		this.player = new Player()
		this.grid = new Grid()
		this.inventory = new Inventory()
	}

	async init(lootUrl = '/data/game-db.json') {
		await this.inventory.loadLootFromUrl(lootUrl)
		this.grid.build(this.config.width, this.config.height, this.config.type)
	}

	giveItemToPlayer() {
		return this.inventory.giveItemToPlayer(this.player)
	}

	updateConfig(obj: Config) {
		this.config = { ...this.config, ...obj }
	}
}

export const game = new Game()
export const atlas = {
	'#': { color: '#f8f9fa', walkable: false, className: 'wall' },
	'.': { color: '#ecf0f1', walkable: true, className: 'floor' },
	_: { color: '#cbd5e1', walkable: true, className: 'room' },
	D: { color: '#dee2e6', walkable: true, className: 'door' }
}
