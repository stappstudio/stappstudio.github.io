<template>
  <div class="text-white">
    <div class="d-block text-center mr-3 mb-3">
      <i :class="[feature.iconName, 'fa-fw', 'fa-2x']" />
    </div>
    <div class="text-center">
      <h5 class="stapp-heading-text font-weight-bold mb-4">
        {{ feature.name }}
      </h5>
      <p class="stapp-body-text mb-1">
        {{ feature.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    feature: {
      type: Object,
      default: null
    }
  }
}
</script>
