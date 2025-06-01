<script lang="ts">
	import { isActive } from '../router'
	import { nav } from './index.js'
</script>

<div class="navbar bg-neutral text-neutral-content shadow-sm">
	<div class="flex-1">
		<a href="/" class="btn btn-neutral text-lg">nwp-studio</a>
	</div>
	<div class="flex-none">
		<ul class="menu menu-horizontal px-1">
			{#each nav as { name, href, icon }, id}
				<li><a {href} data-view-transition>{name}</a></li>
			{/each}
		</ul>
	</div>
</div>
