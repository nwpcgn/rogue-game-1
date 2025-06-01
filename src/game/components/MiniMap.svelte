<script lang="ts">
	// import { Canvas, Layer } from 'svelte-canvas'
	import { game, atlas } from '../game.svelte.ts'
	let {
		mapSize = 10,
		gridWidth = $bindable(10),
		gridHeight = $bindable(10)
	} = $props()
</script>

<span class="border-base-300 bg-base-100 border">
	<div
		bind:clientHeight={gridHeight}
		bind:clientWidth={gridWidth}
		class="rogue-grid"
		style="{game.style} --grid-size: {mapSize}px;">
		{#each game.grid.map as row, y}
			{#each row as col, x}
				{#if col === '#'}
					<span aria-label={col}></span>
				{:else}
					<div
						class={atlas[col]?.className}
						aria-label={col}
						data-x={x}
						data-y={y}>
						{#if game.grid.position.x == x && game.grid.position.y == y}
							<div class="bg-info"></div>
						{/if}
					</div>
				{/if}
			{/each}
		{/each}
	</div>
</span>
