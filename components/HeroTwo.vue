<template>
  <div class="brook-hero-number-slider-area position-relative">
    <div class="brook-element-carousel number-dot">
      <div class="hero-item bg-image">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="hero-content-2 center">
                <h6>WE WORK SMART, WE PLAY HARD</h6>
                <h3>evolutionary creations and exquisite designs.</h3>
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

<script>
export default {
  data () {
    return {
      sliders: [
        {
          id: 1,
          heading: 'revolutionary creations and exquisite designs.',
          subHeading: 'WE WORK SMART, WE PLAY HARD',
          btnUrl: '/',
          bgImage: '/img/bg/hero-bg.jpg'
        },
        {
          id: 2,
          heading: 'revolutionary creations and exquisite designs.',
          subHeading: 'WE WORK SMART, WE PLAY HARD',
          btnUrl: '/',
          bgImage: '/img/slider/authentic-studio-slide-02.jpg'
        },
        {
          id: 3,
          heading: 'revolutionary creations and exquisite designs.',
          subHeading: 'WE WORK SMART, WE PLAY HARD',
          btnUrl: '/',
          bgImage: '/img/slider/authentic-studio-slide-03.jpg'
        }
      ]
    }
  }
}
</script>
