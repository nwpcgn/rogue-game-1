<script lang="ts">
	import { game } from '../game.svelte.js'
	game.init('/data/game-db.json')

	let elem: HTMLDivElement | null = $state()
</script>

<div>
	<table class="table">
		<thead>
			<tr>
				<th>Game Module</th>
				<th>X</th>
				<th>Y</th>
			</tr>
		</thead>
		<tbody>
			<tr>
				<td>Inventory (Items/Fighter)</td>
				<td>{game.inventory?.loot.length}</td>
				<td>{game.inventory?.fighter.length}</td>
			</tr>
			<tr>
				<td>Map ({game.config.type})</td>
				<td>{game.grid?.map[0].length}</td>
				<td>{game.grid?.map.length}</td>
			</tr>
			<tr>
				<td>Player (Position)</td>
				<td>{game.grid?.position.x}</td>
				<td>{game.grid?.position.y}</td>
			</tr>
			<tr>
				<td>Hero ({game.player?.name})</td>
				<td>{game.player.stats?.hp}/{game.player.maxHp}</td>
				<td>{game.player.stats?.mana}/{game.player.maxMana}</td>
			</tr>
		</tbody>
	</table>
</div>

<div bind:this={elem}></div>
