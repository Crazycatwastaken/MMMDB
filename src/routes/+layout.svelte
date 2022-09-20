<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { clickOutside } from '../js/clickout.js';
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	import { MagnifyingGlassSolid, CircleUserRegular } from 'svelte-awesome-icons';
	export let searchquery = '';

	$: currentRoute = $page.url.pathname;
	let loggedin = false;
	let searchActive = false;

	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});

	function searchActived() {
		searchActive = !searchActive;
		progress.set(24);
	}

	// @ts-ignore
	function handleClickOutside(event) {
		progress.set(0);
		console.log($progress);
		while ($progress == 24) {
			if (($progress = 0)) {
				console.log($progress);
				searchActive = false;
			}
		}
	}
</script>

<nav>
	<figure class="flex rounded-xl p-8">
		<img
			class="w-16 h-16 md:w-16 md:h-16 rounded-lg mx-left"
			src="../src/logos\MMMDB.png"
			alt="MMMDB Logo"
		/>
		<div>
			<p class="p-3 text-3xl break-all text-center ">MMMDB</p>
		</div>
		<div class="p-5 text-lg text-center hidden md:block">
			<b>
				<a
					class="p-2"
					class:is-active={currentRoute === '/'}
					class:inactive={currentRoute != '/'}
					href="/">Home</a
				>
				<a
					class="p-2"
					class:is-active={currentRoute === '/about'}
					class:inactive={currentRoute != '/about'}
					href="/about">About</a
				>
				<a
					class="p-2"
					class:is-active={currentRoute === '/Settings'}
					class:inactive={currentRoute != '/Settings'}
					href="/Settings">Settings</a
				>
			</b>
		</div>
		<div class="relative md:flex items-center ml-auto">
			<div class="flex items-center border-l border-slate-200 ml-6 pl-6">
				<div>
					<div
						use:clickOutside
						on:click_outside={handleClickOutside}
						class="p-6 relative left-auto"
					>
						{#if searchActive}
							<div class="relative rounded overflow-hidden  flex justify-center">
								<form action="/search">
									<input
										class="rounded-xl h-10 overflow-hidden  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition ease-in-out delay-150 hover:bg-slate-700 duration-300 "
										style="width: {$progress}rem"
										type="text"
										name="search"
										placeholder="Search"
										value={searchquery}
									/>
								</form>
							</div>
						{:else}
							<button on:click={searchActived}>
								<div class="">
									<MagnifyingGlassSolid class="mx-auto flex" />
								</div>
							</button>
						{/if}
					</div>
				</div>
				<profile>
					{#if loggedin}
						<a href="/profile">
							<img class="w-16 h-16 rounded-lg" src="../src/logos\MMMDB.png" alt="MMMDB Logo" />
						</a>
					{:else}
						<a class="p-6" href="/login">
							<CircleUserRegular />
						</a>
					{/if}
				</profile>
			</div>
		</div>
	</figure>
</nav>
<svelte:head>
	<title>MMMDB</title>
</svelte:head>

<slot />

<style>
	:global(body) {
		background-color: #36393f;
		color: #fff;
	}

	:global(input) {
		background-color: #40444b;
	}
</style>
