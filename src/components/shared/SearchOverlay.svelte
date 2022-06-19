<script lang="ts">
  import {search} from "../../models/Store";
  import Skeleton from "../ui/search/Skeleton.svelte";
  import ToggleButtonGroup from "../forms/buttons/ToggleButtonGroup.svelte";
</script>

<section>
  <div class="head">
    <h1>Search</h1>
    <p>Results for: {$search}</p>
    <div class="mt-2">
      <ToggleButtonGroup options={['New', 'Top', 'Rising']} />
    </div>
    <div class="result">
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
      <Skeleton />
    </div>
  </div>
</section>

<style>
  section {
    @apply w-full h-full absolute top-0 bg-gray-300 bg-opacity-40;
  }

  .head {
    @apply max-w-5xl mx-auto my-0 box-border p-4;
  }

  .result {
    @apply grid grid-cols-3 mt-4 gap-3;
  }

  h1 {
    @apply tracking-tight font-bold;
  }
</style>
