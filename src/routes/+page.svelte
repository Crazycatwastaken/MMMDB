<script lang="js">
	import { fetchDatabase } from '../stores/PopMoviesDB.js';
	import { onMount } from 'svelte';
	export let searchquery = '';

	// @ts-ignore
	async function getdata() {
		const data = await fetchDatabase();
		return data.results;
	}

	let promise = getdata();
	let Poster = 'https://image.tmdb.org/t/p/w500';

	$: innerWidth = 0;

	let right = 0;
	let left = 0;
	let Small = false;
	let Medium = false;
	let Large = false;
	onMount(async () => {
		console.log('Called');
		if (innerWidth < 768) {
			right = 3;
			left = right - 2;
			Small = true;
			console.log('3');
		} else if (innerWidth > 769 && innerWidth < 1024) {
			right = 4;
			left = right - 3;
			Medium = true;
			console.log('4');
		} else if (innerWidth >= 1024) {
			right = 6;
			left = right - 5;
			Large = true;
			console.log('6');
		}
		console.log(Small);
		console.log(Medium);
		console.log(Large);
	});

	// @ts-ignore
	function scrollright({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
		right++;
		if ((Small === true)) {
			left = right - 3;
		} else if ((Medium === true)) {
			left = right - 4;
		} else if ((Large === true)) {
			left = right - 6;
		}
		console.log(Small);
		console.log(Medium);
		console.log(Large);
	}
	// @ts-ignore
	function scrolleft({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
		el.scrollIntoView({
			behavior: 'smooth'
		});
		left--;
		// @ts-ignore
		right = right - 1;
	}
</script>

<svelte:window bind:innerWidth />

<main class="p-5 md:p-10 g:p-20">
	<p>
		Inner Width: {innerWidth}
	</p>
	<h1>MMMDB</h1>

	<div class="not-prose relative rounded-xl overflow-hidden bg-slate-800/25">
		<div class="relative rounded-xl overflow-auto p-8  flex justify-center">
			<form action="/search">
				<input
					class="rounded-xl p-4 w-[96%] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition ease-in-out delay-150 hover:bg-slate-700 duration-300 "
					type="text"
					name="search"
					placeholder="Search"
					value={searchquery}
				/>
				<button class="btn" type="submit">Search</button>
			</form>
		</div>
		<div
			class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5"
		/>
	</div>

	<div class="">
		{#await promise}
			<p>loading</p>
		{:then data}
			<div class="overflow-x-auto flex " style="overflow-x: hidden;">
				{#each data as { poster_path, original_title }, i}
					<div
						class="flex-none h-full w-1/2 py-4 px-1 md:w-1/3 md:py-6 md:px-2 lg:w-1/5"
						id="section-{i + 1}"
					>
						<img
							class="md:object-cover rounded-xl"
							src={Poster + poster_path}
							alt="{original_title} poster"
						/>
					</div>
				{/each}
			</div>
		{/await}
		<a href="#section-{left}" on:click|preventDefault={scrolleft}>left</a>
		<a href="#section-{right}" on:click|preventDefault={scrollright}>right</a>
	</div>
</main>
