<script lang="ts">
  export let tabs: string[];
  export let activeTab = tabs[0];

  function changeTab(tab) {
    activeTab = tab;
  }
</script>

<section>
  {#each tabs as tab}
    <div class="tab {activeTab === tab ? 'is-active' : ''}" on:click={() => changeTab(tab)}> {tab} </div>
  {/each}
  <div class="flex-grow border-b-2 border-gray-200"></div>
</section>

<style lang="postcss">
  section {
    @apply my-4 flex flex-1;
  }

  .tab {
      @apply text-gray-300 hover:text-gray-600 cursor-pointer py-1.5 px-5
      font-semibold border-b-2 border-gray-200 hover:border-gray-600 select-none;
  }

  /*.rest {*/
  /*    @apply flex-grow border-b-2 border-gray-200;*/
  /*}*/

  .is-active {
      @apply text-black border-black;
  }
</style>
