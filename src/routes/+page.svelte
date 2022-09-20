<script>
	import { fetchDatabase } from '../stores/PopMoviesDB.js';

	export let searchquery = '';

	// @ts-ignore
	async function getdata() {
		const data = await fetchDatabase();
		return data.results;
	}
	let promise = getdata();
	let Poster = 'https://image.tmdb.org/t/p/original';
</script>

<main class="px-32">
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
			<p>loading...</p>
		{:then data}
			<div class="overflow-x-auto flex">
				{#each data as { poster_path, original_title }, i}
				<div class="flex-none py-6 px-6 md:w-1/3 md:h-1/1   ">
					<img
						class="md:object-cover  rounded-xl gap-1"
						src={Poster + poster_path}
						alt="{original_title} poster"
					/>
				</div>
				{/each}
			</div>
		{/await}
	</div>
</main>
