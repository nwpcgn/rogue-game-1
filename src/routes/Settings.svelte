<script lang="ts">
	import Iconlist from '../lib/icons/iconlist'
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
	<article class="content">
		<div class="img-grid" style="--min: 66px; --gap: 0.5rem">
			{#each Iconlist as { name, icon, selected }, i}
				<figure>
					{@render iconT(icon, '--fs: 38px;')}
					<figcaption class="text-xs font-light">{name}</figcaption>
				</figure>
			{/each}
		</div>
	</article>
</section>
{#snippet iconT(name, style = '')}
	<svg class="nwp-icon" {style}><use xlink:href="#{name}"></use></svg>
{/snippet}
