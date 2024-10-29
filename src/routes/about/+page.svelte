<script>
	import { page } from '$app/stores';
	
	let { data } = $props();
</script>

<p>page, data: {JSON.stringify(data)}</p>

<p>page, $page.data: {JSON.stringify($page.data)}</p>
