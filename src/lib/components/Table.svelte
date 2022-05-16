<script>
	export let tableData = [];
</script>

{#if tableData.length > 0}
	<table>
		<thead>
			<th>#</th>
			{#each Object.keys(tableData[0]) as columnHeading}
				<th>{columnHeading}</th>
			{/each}
		</thead>
		<tbody>
			{#each Object.values(tableData) as row}
				<tr>
					<td />
					{#each Object.values(row) as cell}
						<td>{cell}</td>
					{/each}
				</tr>
			{/each}
		</tbody>
	</table>
{:else}
	<p>No data found</p>
{/if}

<style>
</style>
