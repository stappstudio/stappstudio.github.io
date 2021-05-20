<template>
  <div
    class="relative w-full h-full flex items-center pointer-events-none"
    :class="right ? 'justify-end' : 'justify-start'"
  >
    <div class="w-2/3 lg:w-1/2 h-full mx-0 lg:mx-auto px-8 lg:px-32 flex items-center justify-center">
      <div class="flex-grow">
        <p class="text-3xl sm:text-5xl mb-10 stapp-heading-text font-bold capitalize">
          <slot name="title" class="pointer-events-auto" />
        </p>
        <slot class="pointer-events-auto" />
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
