<script lang="ts">
	import './router.ts'
	import { auth, signOut } from './lib/auth.svelte.ts'
	import { game } from './game/game.svelte.ts'
	import { views } from './lib'
	import { Router } from 'sv-router'
	import { Sprites, AppBar } from './lib'
	import Auth from './lib/Auth.svelte'
	import Modal from './game/components/Modal.svelte'
	let showModal = $state(false)

	const handleViewClick = (e) => {
		e.preventDefault()
		const link = e.currentTarget.dataset.link
		if (link.includes('user')) {
			console.log('USER')
			game.dialog.show('logout')
		}
	}

	$inspect(auth.userId())
</script>

<Sprites></Sprites>
<Modal bind:showModal>
	{#if game.dialog.content === 'logout'}
		{@render logOutT(game.dialog.props)}
	{:else}
		{@render infoT()}
	{/if}
</Modal>
<AppBar></AppBar>

<div class="main-grid" data-theme="retro">
	<Auth>
		<Router />

		<aside class="aside bg-base-300 w-[180px]">
			{@render mainM(views)}

			<div class="flex-1"></div>
			{@render subM(views)}
		</aside>
		<aside class="bg-base-300 sb w-[180px]">
			<nav class="p-4">
				<h2 class="text-lg font-bold underline">Player</h2>
				<ul>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/map"
							><span>Name</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-player"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/"
							><span>Position</span><span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-full-1"></use>
								</svg><!----></span>
						</a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/game"
							><span>Health</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-shield"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>Mana</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-wheel"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>Inventory</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-server"></use>
								</svg><!----></span
							></a>
					</li>
				</ul>
			</nav>
			<hr class="my-0" />
			<div class="flex-1 p-4"></div>
			<hr class="my-0" />
			<nav class="p-4">
				<h2 class="text-lg font-bold underline">Game</h2>
				<ul>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>Analyze</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-bar"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>Database</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-db"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>Storage</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-tiles"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>User</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-user"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>Messages</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-mail"></use>
								</svg><!----></span
							></a>
					</li>
					<li>
						<a
							class="flex items-center justify-between gap-2 px-2 py-1"
							href="/settings"
							><span>Info</span>
							<span
								><svg class="nwp-icon">
									<use xlink:href="#nwp-info"></use>
								</svg><!----></span
							></a>
					</li>
				</ul>
			</nav>
		</aside>
	</Auth>
</div>

{#snippet iconT(name)}
	<svg class="nwp-icon"><use xlink:href="#{name}"></use></svg>
{/snippet}
{#snippet mainM(views)}
	<h2 class="text-center text-lg font-bold">Navigation</h2>
	<hr class="my-0" />
	<nav class="list">
		{#each views.nav as { name, href, icon }, i}
			<a class="list-row items-center py-1" {href}>
				{@render iconT(icon)}
				<span>{name}</span>
				<span>{i + 1}</span></a>
		{/each}
	</nav>
	<hr class="my-0" />
{/snippet}
{#snippet subM(views)}
	<h2 class="text-center text-lg font-bold">Views</h2>
	<hr class="my-0" />
	<nav class="list">
		{#each views.sub as { name, href, icon }, i}
			<button
				onclick={handleViewClick}
				data-link={href}
				class="list-row cursor-pointer items-center py-1">
				{@render iconT(icon)}
				<span class="text-left">{name}</span>
				<span>{i + 1}</span></button>
		{/each}
	</nav>
	<hr class="my-0" />
{/snippet}

{#snippet logOutT()}
	<h3 class="text-lg font-bold">Abmelden</h3>
	{#if auth?.user}
		<p class="py-4">{auth.user?.email} abmelden?</p>
	{/if}

	<div class="modal-action">
		<form method="dialog">
			<button class="btn btn-error" onclick={signOut}>Logout</button>
			<button class="btn btn-neutral">Cancel</button>
		</form>
	</div>
{/snippet}
{#snippet infoT()}
	<h3 class="text-xl font-bold">User Panel</h3>

	<p class="py-2">
		Angemeldet via <span class="font-bold italic">{auth.user?.email}</span>
	</p>
	<form method="dialog">
		<button class="btn">Close</button>
	</form>
	<div class="modal-action"></div>
{/snippet}
