<script lang="ts">
  import Helper from "../Helper.svelte";

  export let options: never[] = [];
  export let helper: string;
</script>

<div class="select-block">
  {#if helper}
    <Helper text={helper} />
  {/if}
  <select>
    {#each options as option}
      <option>{option}</option>
    {/each}
  </select>
</div>

<style lang="postcss">

  .select-block {
    @apply inline-block align-bottom;
  }

  select {
    @apply h-10 px-4 rounded-lg bg-white border border-gray-200 hover:bg-gray-50 ring-offset-2
    shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 ;
    min-width: 7rem;
  }

  option {
    font-family: sans-serif;
  }
</style>
