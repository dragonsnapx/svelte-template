<script lang="ts">
  import Helper from "./Helper.svelte";

  export let value: string;
  export let validator: (value: string) => string | boolean;
  export let helper: string;
  let errorMessage: string;

  let isInvalid: boolean;
  $: isInvalid = false;

  function runValidator() {
    if (validator) {
      const res = validator(value);
      if (res === false) {
        isInvalid = false;
      } else {
        isInvalid = true;
        errorMessage = res;
      }
    }
  }
</script>

<div class="input-container">
  {#if helper}
    <Helper text={helper} />
  {/if}
  <input class="input-text {isInvalid ? 'is-invalid' : ''}" type="text" bind:value={value} on:focusout={runValidator} />
  {#if isInvalid}
    <div class="error-message">{errorMessage}</div>
  {/if}
</div>

<style lang="postcss">

  .input-container {
    @apply inline-block align-bottom;
  }

  .input-text {
    @apply h-10 px-2 rounded-lg border border-gray-200 focus:border-gray-200 shadow-sm focus:ring-1 focus:ring-gray-300 outline-none;
    min-width: 7rem;
  }

  .is-invalid {
    @apply ring-2 ring-red-400;
  }

  .error-message {
    @apply absolute font-semibold text-sm text-red-400;
  }
</style>
