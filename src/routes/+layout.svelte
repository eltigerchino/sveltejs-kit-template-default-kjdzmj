<script>
    import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';
	
	let { data, children } = $props();
</script>

<p>layout, data: {JSON.stringify(data)}</p>

<p>layout, $page.data: {JSON.stringify($page.data)}</p>

{@render children()}

<button type="button" onclick={() => invalidate("increase:count")}>invalidate</button>

<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/about">About</a></li>
</ul>
