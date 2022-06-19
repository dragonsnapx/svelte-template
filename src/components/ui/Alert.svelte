<script lang="ts">
  import Icon from '@iconify/svelte';
  import type {Colors} from "../shared/Types";

  export let dismissable: boolean;
  export let color: Colors = 'slate';
  export let isDismissed = false;
  export let title: string;
  export let content: string;
</script>

{#if !isDismissed}
  <div class="alert alert-{color}">
    <div class="content">
      <div class="title">{title}</div>
      {#if content}
        <div class="text">{content}</div>
      {/if}
    </div>
    {#if dismissable}
      <div class="button" on:click={() => isDismissed = true}>
        <Icon icon="ic:baseline-close" width={20} />
      </div>
    {/if}
  </div>
{/if}

<style lang="scss">
  @use '../shared/vars';

  .alert {
    @apply rounded-lg px-4 py-3 flex flex-row justify-between mb-2;
  }

  .title {
    @apply text-lg tracking-tight font-semibold;
  }

  .text {
    font-size: 14px;
  }

  .button {
    @apply p-1.5 rounded-xl h-fit cursor-pointer -mr-0.5 -mt-0.5;
  }

  @each $color in vars.$colors {
    .alert-#{$color} {
      @apply bg-#{$color}-200;

      .title, .text {
        @apply text-#{$color}-900;
      }

      .button {
        @apply hover:bg-#{$color}-300 text-#{$color}-800;
      }
    }
  }
</style>
