<script>
	import { page } from '$app/stores';
	
	let { data, children } = $props();
</script>

<p>layout, $page.data: {JSON.stringify(data)}</p>

<p>layout, $page.data: {JSON.stringify($page.data)}</p>

{@render children()}

<button>invalidate</button>

<ul>
	<li><a href="/">Home</a></li>
	<li><a href="/about">About</a></li>
</ul>
