<script lang="ts">
  export let text: string;
</script>

<div class="helper">{text}</div>

<style>
  .helper {
    @apply text-gray-600 font-semibold text-sm mb-1;
  }
</style>
