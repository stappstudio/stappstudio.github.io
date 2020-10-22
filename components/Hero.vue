<template>
  <div class="brook-hero-number-slider-area position-relative">
    <div class="brook-element-carousel number-dot">
      <div class="hero-item bg-image">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="hero-content-2 text-center">
                <h6>
                  {{ $t('hero.sectionSubtitle') }}
                </h6>
                <h3>
                  {{ $t('hero.sectionTitle') }}
                </h3>
                <!-- <n-link to="/" class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between">
                  White button
                </n-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.bg-image {
  background-image: url('/img/bg/hero-bg.jpg');
  background-color: rgba(2, 0, 66, 0.8);
  background-blend-mode: darken;
}
</style>
