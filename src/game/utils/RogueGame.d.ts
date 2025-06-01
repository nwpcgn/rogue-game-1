export interface PlayerT {
	name: string
	stats: Stats
	items?: ItemEntity[] | null
}
export interface Stats {
	hp: number
	atc: number
	def: number
	mana: number
}
export interface ItemEntity {
	name: string
	type: string
	value: number
}
export interface GridT {
	map?: (number[] | null)[] | null
	position: Position
	items?: GridEntity[] | null
	enemies?: GridEntity[] | null
}
export interface Position {
	x: number
	y: number
}
export interface GridEntity {
	x: number
	y: number
	slug: number
}
export interface InventoryT {
	fighter?: FighterEntity[] | null
	loot?: ItemEntity[] | null
}
export interface FighterEntity {
	name: string
	stats: Stats
}
