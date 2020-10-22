<template>
  <div class="single-motive-speach text-white">
    <div class="icon">
      <i :class="[feature.iconName, 'fa-fw']" />
    </div>
    <div class="content">
      <h4>
        {{ feature.name }}
      </h4>
      <p>
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
