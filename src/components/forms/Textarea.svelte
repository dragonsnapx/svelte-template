<script lang="ts">
  import Helper from "./Helper.svelte";

  export let value: string;
  export let helper: string;
</script>

{#if helper}
  <Helper text={helper} />
{/if}
<textarea class="textarea" bind:value={value}></textarea>

<style lang="postcss">
  .textarea {
    @apply rounded-lg border-gray-200 shadow-sm focus:ring-gray-300 p-2 w-full;
    min-height: 7rem;
  }
</style>
