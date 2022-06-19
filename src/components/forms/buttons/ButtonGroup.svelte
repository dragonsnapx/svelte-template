<script lang="ts">
  export interface ButtonGroupActions {
    action: (...unknown) => unknown;
    label: string;
  }

  export let buttonGroup: ButtonGroupActions;
</script>

<div class="inline-flex rounded-md shadow-sm" role="group">
  {#each buttonGroup as button}
    <button type="button" class="button-group" on:click={button.action}>
      {button.label}
    </button>
  {/each}
</div>

<style lang="scss">
  .button-group {
    @apply py-2 px-4 text-sm font-semibold text-gray-700 bg-white
    border-gray-200 hover:bg-gray-50 focus:z-10 focus:ring-2
    focus:ring-blue-400 ring-offset-2 focus:text-blue-400 h-10 align-bottom;

    &:first-of-type {
      @apply rounded-l-lg border;
    }

    &:last-of-type {
      @apply rounded-r-lg border;
    }

    &:not(:first-of-type), &:not(:last-of-type) {
      @apply border-t border-b;
    }
  }
</style>
