<script>
	import { fetchDatabase } from '../../stores/MoviesDB.js';
	import { page } from '$app/stores';
	import { dataset_dev } from 'svelte/internal';
	const searchquery = $page.url.searchParams.get('search');
	// @ts-ignore
	async function getdata(query) {
		if (query.length == 0) {
			return {
				results: []
			};
		}
		const data = await fetchDatabase(query);
		return data.results;
	}
	let promise = getdata(searchquery);
</script>

<main>
	{#if !searchquery}
		<p>Please enter a search Query</p>
	{:else}
		{#await promise}
			<p>loading...</p>
		{:then data}
			{#each data as { title }, i}
				<div>
					<h2>{title}</h2>
				</div>
			{/each}
		{/await}
	{/if}
</main>
