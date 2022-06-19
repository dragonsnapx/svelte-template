<script lang="ts">
  import Strings from "../../utils/Strings";

  export interface Options {
    value: string;
    label: string;
  }

  export let options: Options[];
  export let value: string;
</script>

<fieldset>
  {#each options as option}
    <div class="wr">
      <input id={Strings.slugify(option.value)} bind:group={value} name="push-notifications" type="radio" class="radio">
      <label for={Strings.slugify(option.value)} class="label"> {option.label} </label>
    </div>
  {/each}
</fieldset>

<style lang="postcss">

  fieldset {
    @apply space-y-1;
  }

  .wr {
    @apply flex items-center;
  }

  .radio {
    @apply focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300
  }

  .label {
    @apply ml-3 block text-sm font-medium text-gray-700;
  }
</style>
