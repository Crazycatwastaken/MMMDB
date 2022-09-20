<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';


	const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
</script>

<div class="relative rounded overflow-hidden  flex justify-center">
    <form action="/search">
        <input
            class="rounded-xl h-10 overflow-hidden  shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 transition ease-in-out delay-150 hover:bg-slate-700 duration-300"
            style="width: {$progress}rem"
            type="text"
            name="search"
            placeholder="Search"
        />
    </form>
</div>

<button on:click={() => progress.set(0)}> 0% </button>

<button on:click={() => progress.set(24)}> 25% </button>

<button on:click={() => progress.set(0.5)}> 50% </button>

<button on:click={() => progress.set(0.75)}> 75% </button>

<button on:click={() => progress.set(1)}> 100% </button>

<style>
	progress {
		display: block;
		width: 100%;
	}
</style>
