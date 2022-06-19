<script lang="ts">
  export let value: boolean = false;
  export let text: string;
  export let helper: string;
</script>

<div class="checkbox">
  <div class="checkbox-wr">
    <input id="candidates" name="candidates" type="checkbox" class="input-checkbox" bind:value={value}>
  </div>
  <div class="text-wr">
    <label for="candidates" class="main-text">{text}</label>
    {#if helper}
      <p class="helper"> {helper} </p>
    {/if}
  </div>
</div>

<style lang="postcss">
  .checkbox {
    @apply items-start flex;
  }

  .checkbox-wr {
    @apply flex items-center h-5;
  }

  .text-wr {
    @apply ml-3 text-sm;
  }

  .input-checkbox {
    @apply focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded;
  }

  .main-text {
    @apply font-medium text-gray-700;
  }

  .helper {
    @apply text-gray-500 text-xs;
  }
</style>
