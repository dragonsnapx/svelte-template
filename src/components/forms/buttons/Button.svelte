<script lang="ts">
  import Spinner from "../Spinner.svelte";
  import type {Colors} from "../../shared/Types";
  const darkColors = ['black'];

  export let color: Colors | 'black' = "black";
  export let text: string;
  export let onClick: (...args: unknown[]) => void;
  export let isLoading = false;
  export let isPinging = false;
</script>

<div class="button-container">
  <button class="button button-{color} {isLoading ? 'is-loading' : ''}" on:click={onClick}>
    {#if isLoading}
      <Spinner color={darkColors.includes(color) ? 'black' : 'white'} />
    {:else}
      {text}
    {/if}
  </button>
  {#if isPinging}
    <span class="ping">
      <span class="first-el"></span>
      <span class="second-el"></span>
    </span>
  {/if}
</div>

<style lang="scss">
  @use '../../shared/vars';

  .button-container {
    display: inline-flex;
    vertical-align: bottom;
    flex-direction: column;
  }

  .button {
    @apply h-10 px-4 text-white font-normal shadow-sm rounded-lg font-semibold
    text-sm align-bottom ring-offset-2 focus:ring-2;
    min-width: 7rem;

    &::after {
      content: '';
    }

    &.is-loading {
      @apply cursor-auto;
    }
  }

  @each $color in vars.$colors {
    .button-#{$color} {
      @apply bg-#{$color}-600 focus:ring-#{$color}-400;

      &:not(.is-loading) {
        @apply hover:bg-#{$color}-500;
      }
    }
  }

  .button-black {
    @apply border border-gray-200 text-gray-700 bg-white focus:ring-blue-400;
  }

  .button-black:not(.is-loading) {
    @apply hover:bg-gray-50;
  }

  .ping {
    @apply flex h-3 w-3 absolute self-end;
    margin-top: -4px;
    margin-right: -4px;

    .first-el {
      @apply animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-300 opacity-75;
    }

    .second-el {
      @apply relative inline-flex rounded-full h-3 w-3 bg-sky-400;
    }
  }
</style>
