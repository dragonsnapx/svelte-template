<script lang="ts">
  import Icon from '@iconify/svelte';

  export let value: boolean;
  export let text: string;
  $: value = false;
</script>

<div class="checkable {value ? 'active' : ''}" on:click={() => value = !value}>
  {text}
  <span class="icon-wr {value ? 'active' : ''}">
    <Icon icon="ic:baseline-check" width={20} />
  </span>
</div>

<style lang="scss">
  .checkable {
    @apply inline-flex px-3 py-1 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-100
    border transition-colors select-none text-gray-700 shadow-sm;

    &.active {
      @apply bg-blue-500 hover:bg-blue-400 text-white border-sky-200;
    }
  }

  .icon-wr {
    @apply text-white grid place-items-center ml-1.5;

    &.active {
      @apply text-green-400;
    }
  }
</style>
