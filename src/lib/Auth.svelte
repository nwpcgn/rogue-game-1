<script lang="ts">
	import supabase from './supabase.js'
	import { auth } from './auth.svelte.ts'
	let { children } = $props()
	let email = $state('')
	let password = $state('')
	supabase.auth.onAuthStateChange((event, session) => {
		setTimeout(async () => {
			if (event === 'SIGNED_IN') {
				console.log('SIGNED_IN', session)
				auth.signIn(session.user)
			} else if (event === 'SIGNED_OUT') {
				auth.signOut()
			}
		}, 100)
	})
	const signIn = async (e) => {
		e.preventDefault()
		try {
			const obj = { email, password }
			const { data, error } = await supabase.auth.signInWithPassword(obj)
			if (data) {
				console.log('SignIn Succeed')
			}
			if (error) {
				console.log('SignIn Failed', error)
				throw new Error('XXXXXX')
			}
		} catch (error) {
			alert(error)
		}
	}

	const init = async () => {
		try {
			const {
				data: { user }
			} = await supabase.auth.getUser()
			if (user) {
				auth.signIn(user)
			} else {
				auth.signOut()
			}
		} catch (error) {
			alert(error)
		}
	}

	let promise = $state(init)
</script>

{#await promise then _}
	{#if auth.userId()}
		{@render children?.()}
	{:else}
		<main class="main">
			<section class="nwp page center">
				<article class="w-[360px] p-4">
					<fieldset
						class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
						<legend class="fieldset-legend">Login</legend>

						<label class="label">Email</label>
						<input
							type="email"
							class="input"
							bind:value={email}
							placeholder="Email" />

						<label class="label">Password</label>
						<input
							type="password"
							class="input"
							bind:value={password}
							placeholder="Password" />

						<button onclick={signIn} class="btn btn-neutral mt-4">Login</button>
					</fieldset>
				</article>
			</section>
		</main>
	{/if}
{/await}
