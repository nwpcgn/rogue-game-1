<script lang="ts">
	import { isActive } from '../router'
	import { views } from './'
</script>

<nav class="bg-neutral text-neutral-content navbar shadow-md">
	<div class="flex-1">
		<a href="/" class="btn btn-neutral text-xl">nwp-studio</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#each views.nav as { name, href, icon, hidden }, id}
				{#if !hidden}
					<li>
						<a {href} data-view-transition class:text-info={isActive(href)}
							>{name}</a>
					</li>
				{/if}
			{/each}
		</ul>
	</div>
</nav>
