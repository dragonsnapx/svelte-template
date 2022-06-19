<script lang="ts">
  import type {Colors} from "../shared/Types";

  export let color: Colors;
</script>

<div class="pill pill-{color}">Writer</div>

<style lang="scss">
  @use '../shared/vars';

  .pill {
    @apply rounded-lg inline px-3 py-0.5 text-sm font-semibold cursor-default select-none;
  }

  @each $color in vars.$colors {
    .pill-#{$color} {
      @apply bg-#{$color}-200 text-#{$color}-800;
    }
  }
</style>
