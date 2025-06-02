<script>
	import { onMount } from 'svelte'
	import { game } from '../game.svelte.ts'
	let { showModal = $bindable(), header, children } = $props()

	let dialog = $state() // HTMLDialogElement

	$effect(() => {
		if (game.dialog.open) dialog.showModal()
		if (!game.dialog.open) dialog.close()
	})


</script>

<!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_noninteractive_element_interactions -->
<dialog
	bind:this={dialog}
	class="modal"
	onclose={() => (game.dialog.open = false)}
	onclick={(e) => {
		if (e.target === dialog) dialog.close()
	}}>
	<div class="modal-box">
		{@render header?.()}
		{@render children?.()}

		<!-- <form method="dialog" class="modal-backdrop">
			<button>close</button>
		</form> -->
	</div>
</dialog>
