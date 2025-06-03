<script>
	let { children } = $props()
</script>

<main class="bg-base-100 main relative overflow-hidden border-r border-l">
	{@render children?.()}
</main>
