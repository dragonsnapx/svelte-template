<script lang="ts">
  export let title: string;
</script>

<h1>{title}</h1>

<style lang="postcss">
  h1 {
    @apply text-2xl font-semibold text-gray-600 hover:text-gray-900 cursor-pointer tracking-tight inline-block;
  }
</style>
