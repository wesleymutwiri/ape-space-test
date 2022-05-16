<!-- <script context="module">
	export async function load({ fetch, params }) {
		const url = `/${params.contract}.json`;
		const res = await fetch(url);
		if (res.ok) {
			const { volume } = await res.json();
			return {
				props: {
					volume: volume.items[0]
				}
			};
		}
		return {
			status: res.status,
			error: new Error(`Could not load ${url}`)
		};
	}
</script> -->
<script>
	import { page } from '$app/stores';
	import Table from '$lib/components/Table.svelte';

	export /**
	 * @type {{ pair: string; volume: string; }[] | undefined}
	 */
	let volume;
</script>

<h1>Data for: {$page.params.contract}</h1>
<Table tableData={volume} />
