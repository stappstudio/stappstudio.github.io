<template>
  <div class="brook-service-area bg-secondary">
    <div class="row align-items-center">
      <div class="row startupservice-wrapper">
        <div v-for="feature in $t('features')" :key="feature.id" class="col-lg-4 mt--40">
          <FeatureItem :feature="feature" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    FeatureItem: () => import('@/components/FeatureItem')
  }
}
</script>
