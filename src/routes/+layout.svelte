<script>
	import '../app.css';
	import { page } from '$app/stores';
	import { clickOutside } from '../js/clickout.js';
	import { tweened } from 'svelte/motion';
	import { cubicInOut } from 'svelte/easing';
	import { MagnifyingGlassSolid, CircleUserRegular } from 'svelte-awesome-icons';
	export let searchquery = '';

	$: currentRoute = $page.url.pathname;
	let loggedin = false;
	let searchActive = false;
	
	const progress = tweened(0, {
		duration: 400,
		easing: cubicInOut
	});

	const progress2 = tweened(2, {
		duration: 400,
		easing: cubicInOut
	});

	function searchActived() {
		progress2.set(0);
		setTimeout(() => {
			searchActive = true;
			progress.set(24);
		}, 400);
		
	}

	// @ts-ignore
	function handleClickOutside(event) {
		progress.set(0);
		setTimeout(() => {
			searchActive = false;
			progress2.set(2);
		}, 400);
	}

	



</script>

<nav>
	<figure class="grid gird-cols-3 rounded-xl p-8">
		<div class="flex justify-start items-center">
			<img
				class="w-16 h-16 md:w-16 md:h-16 rounded-lg mx-left"
				src="../src/logos\MMMDB.png"
				alt="MMMDB Logo"
			/>
			<div>
				<p class="pl-3 text-3xl break-all text-center ">MMMDB</p>
			</div>
			<div class="pl-5 text-lg text-center hidden md:block">
				<b>
					<a
						class="pl-2"
						class:is-active={currentRoute === '/'}
						class:inactive={currentRoute != '/'}
						href="/">Home</a
					>
					<a
						class="pl-2"
						class:is-active={currentRoute === '/about'}
						class:inactive={currentRoute != '/about'}
						href="/about">About</a
					>
					<a
						class="pl-2"
						class:is-active={currentRoute === '/Settings'}
						class:inactive={currentRoute != '/Settings'}
						href="/Settings">Settings</a
					>
				</b>
			</div>
		</div>
		<div class="col-start-3 flex justify-end items-center">
			<div>
				<div class="flex items-center border-l border-slate-200 ml-6 pl-6">
					<div>
						<div
							use:clickOutside
							on:click_outside={handleClickOutside}
							class="pr-4 relative left-auto"
						>
							{#if searchActive}
								<div class="relative rounded overflow-hidden flex justify-center">
									<form action="/search">
										<input
											class="rounded-xl h-16  overflow-hidden  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition ease-in-out delay-150 hover:bg-slate-700 duration-300 "
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
									<div>
										<MagnifyingGlassSolid class="translate-y-0.5" style="width: {$progress2}rem"/>
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
								<CircleUserRegular class="py"/>
							</a>
						{/if}
					</profile>
				</div>
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
