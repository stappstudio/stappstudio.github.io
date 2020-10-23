<template>
  <div class="bg-secondary">
    <div class="container align-items-center pb-5">
      <div class="row flex-grow-1">
        <div v-for="feature in $t('features')" :key="feature.id" class="col-md-6 col-lg-4 mt-5">
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

<style lang="scss" scoped>
.features-wrapper {
  // Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  padding: 10px 15px 50px 35px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    padding: 10px 34px 50px 66px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    padding: 10px 34px 50px 66px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    padding: 10px 100px 50px 316px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    padding: 10px 100px 50px 316px;
  }
}
</style>
