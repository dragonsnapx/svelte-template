<script lang="ts">
  import Button from "../../components/forms/buttons/Button.svelte";
  import Dropdown from "../../components/forms/dropdowns/Dropdown.svelte";
  import Textbox from "../../components/forms/Textbox.svelte";
  import Checkbox from "../../components/forms/Checkbox.svelte";
  import Checkable from "../../components/forms/Checkable.svelte";
  import Textarea from "../../components/forms/Textarea.svelte";
  import AdvancedDropdown from "../../components/forms/dropdowns/SearchableDropdown.svelte";
  import Tabs from "../../components/ui/Tabs.svelte";
  import Modal from "../../components/ui/Modal.svelte";
  import Alert from "../../components/ui/Alert.svelte";
  import Radios from "../../components/forms/Radios.svelte";
  import ButtonGroup from "../../components/forms/buttons/ButtonGroup.svelte";
  import ToggleButtonGroup from "../../components/forms/buttons/ToggleButtonGroup.svelte";
  import Pill from "../../components/ui/Pill.svelte";

  const brands = ['EVGA', 'MSI', 'Asus', 'Nvidia'];

  let showModal = false;
</script>

<section>
  <h1>Add a new part</h1>

  <div class="form">
    <Alert title="This form will be deprecated soon."
           content="Go to the new form."
           color="orange"
           dismissable="true" />
    <p class="subtitle">Add a brand:</p>
    <div class="line">
      <Dropdown helper="Type" options={brands}/>
      <Textbox helper="Name" />
      <Button color="black" text="Add"/>
    </div>
    <p class="subtitle">Add a product:</p>
    <div class="line">
      <Dropdown helper="Type" options={brands}/>
      <Dropdown helper="Brand" options={brands}/>
      <Textbox helper="Name" />
    </div>
    <div class="line">
      <Checkable text="CPU" />
      <Checkable text="GPU" />
      <Checkable text="RAM" />
      <Checkable text="Storage" />
    </div>
    <div class="line">
      <Checkbox text="Enable Custom Parts" />
    </div>
    <div class="line">
      <Radios options={[
        {value: 'genuine-parts', label: 'Genuine Parts Only'},
        {value: 'generic-parts', label: 'Generic Parts Only'},
        {value: 'all-parts', label: 'All Parts'}
      ]} />
    </div>
    <div class="line">
      <Textarea />
    </div>
    <div class="line">
      <AdvancedDropdown />
    </div>
    <div class="line">
      <Tabs tabs={['Overview', 'Help', 'Insert']} />
    </div>
    <div class="line">
      <Button color="orange" text="Spawn Modal" onClick={() => showModal = true} isLoading={showModal} />
    </div>
    <div class="line">
      <ButtonGroup buttonGroup={[
        {label: 'Previous Page', action: () => console.log()},
        {label: 'Next Page', action: () => console.log()},
      ]} />
    </div>
    <div class="line">
      <ToggleButtonGroup options={['New', 'Top', 'Controversial']} />
    </div>
    <div class="line">
      <Pill color="slate" />
    </div>
  </div>
</section>

<Modal isVisible={showModal} />

<style lang="scss">
  h1 {
    @apply text-3xl font-semibold;
  }

  .subtitle {
    @apply font-bold;
  }

  .form {
    @apply bg-gray-50 rounded-xl my-4 p-4;
  }

  .line {
    @apply mb-3;
  }
</style>
