<script lang="ts">
import ClickableTitle from "../components/ui/ClickableTitle.svelte";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="One-stop place for Pokemon ROM Hacks" />
</svelte:head>

<section>
	<ClickableTitle title="College Trends" />
	<div class="scrollable-container">
		<div class="data-container">
			<div class="data">
				<div class="number">67%</div>
				<div class="source">Acceptance Rate</div>
			</div>
		</div>
		<div class="data-container">

		</div>
	</div>
	<ClickableTitle title="Title 2" />
	<ClickableTitle title="Colleges" />
</section>

<style lang="scss">

	.description {
		@apply text-gray-500 -mt-1 mb-1;
	}

	section {
		@apply flex flex-col justify-center flex-1;
	}

	.scrollable-container {
		@apply my-3 flex flex-row;
	}

	.data-container {
		@apply w-52 h-24 bg-gray-50 border border-gray-100 rounded-xl mr-2 p-2 grid place-items-center;

		.number {
			@apply text-3xl text-center;
		}

		.source {
			@apply text-gray-500 text-center;
		}
	}
</style>
