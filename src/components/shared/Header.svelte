<script lang="ts">
  import {search} from "../../models/Store";
</script>

<header>
  <div class="content">
    <a class="logo" href="/">mint</a>
    <input type="text" class="text" placeholder="Search" bind:value={$search} />
  </div>
</header>

<style lang="postcss">
  header {
    @apply bg-gray-50 border-b border-gray-100;
  }

  .content {
    margin: 0 auto;
    @apply py-2 flex flex-1 max-w-5xl w-full p-4 box-border flex flex-row;
  }

  .text {
    @apply ml-4 border border-gray-200 rounded-lg w-64 px-1 py-1 outline-none
    focus:ring-gray-300 focus:ring-1 px-2 focus-within:w-96 transition-width
    ease-in duration-150 focus:border-gray-200;
  }

  .logo {
      @apply text-2xl tracking-tighter cursor-pointer text-black;
  }
</style>
