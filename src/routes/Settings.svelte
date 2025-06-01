<script lang="ts">
	import svelteLogo from '../assets/svelte.svg'
	import viteLogo from '/vite.svg'
	const name = 'Settings Page'
</script>

<section class="nwp page">
	<article class="content">
		<div class="flex items-center justify-center gap-8">
			<a href="https://vite.dev" target="_blank" rel="noreferrer">
				<img src={viteLogo} class="logo" alt="Vite Logo" />
			</a>
			<a href="https://svelte.dev" target="_blank" rel="noreferrer">
				<img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
			</a>
		</div>

		<hgroup>
			<h1>{name}</h1>
		</hgroup>
	</article>
</section>
