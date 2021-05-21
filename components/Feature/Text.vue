<template>
  <div
    class="relative w-full h-full flex items-center pointer-events-none"
    :class="right ? 'justify-end' : 'justify-start'"
  >
    <div class="w-2/3 lg:w-1/2 h-full mx-0 lg:mx-auto px-8 lg:px-32 flex items-center justify-center">
      <div class="flex-grow">
        <p class="text-3xl sm:text-5xl mb-10 stapp-heading-text capitalize">
          <slot name="title" class="pointer-events-auto" />
        </p>
        <div class="feature-text pointer-events-auto">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="postcss" scoped>
.feature-text p {
  @apply mt-4;
}
</style>
