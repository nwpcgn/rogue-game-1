<script>
	import { isActive } from '../../router'
	import { nav, views } from '../'
	let { children } = $props()
	const handleViewClick = (e) => {
		e.preventDefault()
		const link = e.currentTarget.dataset.link
		console.log({ link })
	}
</script>

<main class="bg-base-100 main relative overflow-hidden border-r border-l">
	{@render children?.()}
</main>



{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}

