<template>
  <div class="bg-white pb-5 px-5 position-relative">
    <div class="container pt-5">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="brook-section-title wow move-up">
            <h3 class="stapp-heading-text font-weight-bold font-large text-secondary">
              {{ $t('mainFeatures.sectionTitle') }}
            </h3>
            <hr class="mt-5 bg-primary" :style="{width: '200px', height: '5px'}">
            <!-- <div class="thumb mt--35">
              <img src="/img/service/icon-box/wavy-icon.png" alt="wavy icon">
            </div> -->
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt-md-0">
          <div class="brook-section-details wow move-up">
            <p class="stapp-body-text bk_pra font-16 line-height-1-87">
              {{ $t('mainFeatures.sectionSubtitle') }}
            </p>
          </div>
        </div>
      </div>
      <div class="row mt-4">
        <div class="col-12">
          <div class="row">
            <div v-for="feature in $t('mainFeatures.features')" :key="feature.id" class="col-lg-4 col-sm-6 wow move-up">
              <div class="feature-wrapper text-center bg-transparent mt-2">
                <div class="mb-4 text-secondary">
                  <img :src="feature.iconSrc" alt="feature icon">
                </div>
                <div class="content">
                  <h5 class="stapp-heading-text font-weight-bold mb-3">
                    {{ feature.name }}
                  </h5>
                  <p class="stapp-body-text bk_pra">
                    {{ feature.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.feature-wrapper {
  transition: all .3s cubic-bezier(.645,.045,.355,1);

  &:hover {
    transform: translateY(-5px);
  }
}
</style>
