<script>
	export let searchquery = '';
</script>

<main>
	<h1>MMMDB</h1>
	<form action="/search">
		<input type="text" name="search" placeholder="Search" value={searchquery} />
		<button type="submit">Search</button>
	</form>
</main>


