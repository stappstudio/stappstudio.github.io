<template>
  <div class="position-relative">
    <div class="bg-image w-100 justify-content-center align-items-center position-relative d-flex">
      <div class="px-5 container">
        <div class="row">
          <div class="col-12">
            <div class="text-center">
              <h1 class="display-2 stapp-heading-text font-weight-bold text-white">
                {{ $t('hero.sectionTitle') }}
              </h1>
              <h5 class="stapp-heading-text text-capitalize font-weight-bold mb-4 text-white">
                {{ $t('hero.sectionSubtitle') }}
              </h5>
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

  // Extra small devices (portrait phones, less than 576px)
  // No media query since this is the default in Bootstrap
  height: 200px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    height: 270px;
  }

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    height: 300px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    height:390px
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    height:450px
  }
}

h1 {
  // Extra small devices (portrait phones, less than 576px)
  // Small devices (landscape phones, 576px and up)
  // No media query since this is the default in Bootstrap
  font-size: 33px;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    font-size: 44px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 58px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    font-size: 80px;
  }
}

h5 {
  // Extra small devices (portrait phones, less than 576px)
  // Small devices (landscape phones, 576px and up)
  // No media query since this is the default in Bootstrap
  font-size: 12px;

  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    font-size: 15px;
  }

  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    font-size: 16px;
  }

  // Extra large devices (large desktops, 1200px and up)
  @media (min-width: 1200px) {
    font-size: 18px;
  }
}
</style>
