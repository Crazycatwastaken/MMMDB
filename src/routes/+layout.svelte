<script>
	import '../app.css';
</script>

<nav>
	<figure class="md:flex rounded-xl p-8 md:p-0 bg-nav">
		<img
			class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-left"
			src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
			alt=""
			width="384"
			height="512"
		/>
		<div class="pt-6 md:p-8 text-center md:text-left space-y-4">
			<b>
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/settings">Settings</a>
			</b>
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
