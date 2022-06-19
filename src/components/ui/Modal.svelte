<script>
  import Transition from 'svelte-class-transition';

  export let isVisible = false;
</script>

<div class="modal-wr" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <Transition
    toggle={isVisible}
    inTransition="ease-out duration-300"
    inState="opacity-0"
    onState="opacity-100"
    outState="opacity-0"
    outTransition="ease-in duration-200"
  >
    <div>
      <div class="modal-bg"></div>
      <div class="modal">
        <div class="modal-content">
          <Transition
            toggle={isVisible}
            inTransition="ease-out duration-300"
            inState="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            onState="opacity-100 translate-y-0 sm:scale-100"
            outState="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            outTransition="ease-in duration-200"
          >
            <div class="modal-outer">
              <slot></slot>
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </Transition>
</div>

<style lang="scss">
  .modal-wr {
    @apply relative z-10;
  }

  .modal-bg {
    @apply fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity;
  }

  .modal {
    @apply fixed z-10 inset-0 overflow-y-auto;
  }

  .modal-content {
    @apply flex items-end sm:items-center justify-center min-h-full p-4 text-center sm:p-0;
  }

  .modal-outer {
    @apply relative bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:max-w-lg sm:w-full;
  }
</style>
