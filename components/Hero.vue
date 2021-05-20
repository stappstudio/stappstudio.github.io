<template>
  <div class="relative">
    <div class="bg-image h-52 md:h-72 lg:h-80 xl:h-96 w-full justify-center items-center relative flex">
      <div class="px-5 container">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <h1 class="stapp-heading-text font-weight-bold text-white">
                {{ $t('hero.sectionTitle') }}
              </h1>
              <!-- <h4 class="stapp-heading-text text-capitalize font-weight-bold my-4 text-white">
                {{ $t('hero.sectionSubtitle') }}
              </h4> -->
              <!-- <n-link to="/" class="brook-btn bk-btn-white btn-sd-size btn-rounded space-between">
                White button
              </n-link> -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-image {
  background-image: url('/img/bg/hero-bg.jpg');
  background-color: rgba(2, 0, 66, 0.8);
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
</style>
