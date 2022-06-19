<script lang="ts">
	import '../app.css';

	import Header from '../components/shared/Header.svelte';
	import "../components/shared/global.scss";
	import SearchOverlay from "../components/shared/SearchOverlay.svelte";
	import {search} from "../models/Store";
</script>

<Header />
<div class="master">
	<main class:blur-lg={$search.length > 0}>
		<slot />
	</main>
	{#if $search.length > 0}
		<SearchOverlay />
	{/if}
</div>
<style>

	.master {
		@apply relative min-h-full;
	}

	main {
		margin: 0 auto;
		@apply flex flex-1 flex-col w-full max-w-5xl p-4 box-border;
	}
</style>
