<script>
	let { children } = $props()
</script>

<div class="main-grid" data-theme="retro">
	<!-- <aside class="aside bg-base-200">Left</aside> -->
	<main class="main">
		{@render children?.()}
	</main>
	<!-- <aside class="bg-base-200 sb">Right</aside> -->
</div>
