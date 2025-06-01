<script lang="ts">
	import MiniMap from './components/MiniMap.svelte'
	import GameStats from './components/GameStats.svelte'
	import { onMount } from 'svelte'
	import { game, atlas } from './game.svelte.ts'
	const name = 'Dungeon Game'
	let mapSize = $state(10)
	let gridWidth = $state(10)
	let gridHeight = $state(10)
</script>

<!-- <aside class="aside bg-base-200">Left</aside> -->
<main class="main">
	<section class="nwp page">
		<article class="content">
			<hgroup>
				<h1>{name}</h1>
			</hgroup>
		</article>
		<article class="content">
			<GameStats></GameStats>
		</article>
		<article class="content flex justify-center gap-4">
			<MiniMap {mapSize} bind:gridWidth bind:gridHeight></MiniMap>
		</article>
	</section>
</main>
<aside class="bg-base-200 sb">
	<div class="flex flex-col gap-1 p-4">
		<div class="flex items-center justify-between gap-8">
			<span>Grid:</span>
			<span>{gridWidth}x{gridHeight}</span>
		</div>
		<div class="flex items-center justify-between gap-8">
			<span>Tile:</span>
			<span>{mapSize}px</span>
		</div>
		<input type="range" min="4" max="50" value={mapSize} class="range" />
	</div>
</aside>
