<script>
	import { fetchDatabase } from '../stores/MoviesDB.js';

	// @ts-ignore
	async function getdata(query) {
		if (query.length == 0)  {
			return{
				"results": []
			}
		}
		const data = await fetchDatabase(query);
		return data.results;
	}
	let promise = getdata();
	let searchquery = '';

	function search(){
		promise = getdata(searchquery);
	}
</script>

<main>
	<h1>MMMDB</h1>
	<form on:submit|preventDefault={search}>
		<input type="text" bind:value={searchquery} />
		<button type="button" on:click={search}>Search</button>
	</form>

	{#await promise}
		<p>loading...</p>
	{:then data}
		{#each data as {title}, i}
			<div>
				<h2>{title}</h2>
			</div>
		{/each}
	{/await}
</main>

<style>
	:global(body) {
		background-color: #36393f;
		color: #fff;
	}
</style>
