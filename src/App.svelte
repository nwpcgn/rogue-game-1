<script lang="ts">
	import AppBar from './lib/AppBar.svelte'
	import { Router } from 'sv-router'
	import './router.ts'
</script>

<AppBar></AppBar>

<Router />

<footer class="bg-base-300">
	<div class="content flat text-center">
		<small>nwp-cgn</small>
	</div>
</footer>
