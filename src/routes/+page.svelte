<script>
	export let searchquery = '';
</script>

<main class="px-32">
	<h1>MMMDB</h1>

	<div class="not-prose relative rounded-xl overflow-hidden bg-slate-800/25">
		<div class="relative rounded-xl overflow-auto p-8  flex justify-center">
			<form action="/search" >
				<input 	class="rounded-xl p-4 w-[96%] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition ease-in-out delay-150 hover:bg-slate-700 duration-300 " type="text" name="search" placeholder="Search" value={searchquery} />
				<button class="btn" type="submit">Search</button>
			</form>
			
		</div>	
		<div class="absolute inset-0 pointer-events-none border border-black/5 rounded-xl dark:border-white/5">	</div>
	</div>


	<h1 class="text-3xl font-bold underline">Hello world!</h1>
	

</main>
