<template>
  <div
    class="icon-wrapper flex items-center justify-center"
    :class="right ? 'icon-right' : 'icon-left'"
  >
    <div class="w-full">
      <slot />
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
.icon-wrapper {
  position: absolute;
  top: 0;
  bottom: 0;
}

.icon-right {
  right: 0;
  transform: translateX(50%);
}

.icon-left {
  left: 0;
  transform: translateX(-50%);
}
</style>
