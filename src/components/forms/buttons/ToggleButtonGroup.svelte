<script lang="ts">
  export let options: string[];
  export let value = options[0];
</script>

<div class="group">
  {#each options as option}
    <div class={option === value ? 'button-active' : "button"} on:click={() => value = option}>{option}</div>
  {/each}
</div>

<style lang="scss">
  .group {
    @apply bg-gray-100 inline-flex rounded-lg hover:bg-gray-200 p-0.5 cursor-pointer shadow-sm;
  }

  .button, .button-active {
    @apply px-3 py-1 text-center grid items-center;
    min-width: 5rem;
  }

  .button {
    @apply text-slate-500;
  }

  .button-active {
    @apply rounded-md bg-gray-50 border border-gray-300;
  }
</style>
