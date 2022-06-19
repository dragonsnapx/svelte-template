<div class="skeleton">
  <div class="skeleton-wr">
    <div class="content">
      <div class="h-6 bg-gray-300 rounded w-60"></div>
      <div class="h-3 bg-gray-200 mt-56 rounded w-48"></div>
      <div class="h-2 bg-gray-300 rounded w-32"></div>
      <div class="h-2 bg-gray-300 rounded"></div>
      <div class="h-2 bg-gray-300 rounded w-52"></div>
      <div class="h-2 bg-gray-300 rounded w-56"></div>
    </div>
  </div>
</div>

<style>
  .skeleton {
    @apply border border-gray-50 shadow rounded-md p-4 max-w-md w-full mx-auto h-44 bg-white opacity-50;
  }

  .skeleton-wr {
    @apply animate-pulse flex space-x-4;
  }

  .content {
    @apply flex-1 space-y-3 py-1;
  }
</style>
