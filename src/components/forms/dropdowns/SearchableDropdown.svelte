<script lang="ts">
  import Select from 'svelte-select';

  export interface ItemType {
    label: string;
    value: string;
  }

  export let items: ItemType[] = [];
  export let value;
  export let handleSelect: (event: unknown) => string;
  export let placeholder = 'Search';

  function handleValueSelect(event) {
    if (handleSelect) {
      handleSelect(event)
    } else {
      value = event.detail.value;
    }
  }
</script>

<div class="themed">
  <Select {items} {value} {placeholder} showChevron={true} on:select={handleValueSelect}></Select>
</div>

<style>
  .themed {
    --border: 1px solid rgb(229 231 235);
    --borderRadius: .5rem;
    --borderFocusColor: rgb(229 231 235);
    --borderHoverColor: rgb(229 231 235);
    --padding: .5rem;
    --inputFontSize: 1rem;
    --listBorderRadius: .5rem;
    --listShadow: 0 0 #0000, 0 0 #0000, 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --itemPadding: .5rem;
    --listBorder: 1px solid rgb(229 231 235);
    --itemColor: rgb(75 85 99);
    --itemIsActiveColor: rgb(17 24 39);
    --itemHoverBG: rgb(243 244 246);
    --itemIsActiveBG: rgb(229 231 235);
  }
</style>
