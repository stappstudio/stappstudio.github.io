<template>
  <section class="main-section w-full py-12 overflow-x-hidden">
    <div class="relative w-full h-full content-container">
      <div class="w-full h-full lg:h-auto lg:pt-36 lg:pb-12 px-8 flex flex-col justify-center items-start">
        <div class="flex flex-wrap justify-start items-center text-5xl text-white stapp-heading-text">
          <span>We </span>
          <div ref="slider" class="verbs-slider text-stapp-pink frame-one flex flex-col font-bold text-center px-4 h-16">
            <span>craft</span>
            <span>design</span>
            <span>develop</span>
            <span>publish</span>
          </div>
          <span>high-quality apps</span>
        </div>
        <div class="my-8 flex flex-wrap justify-start items-start text-xl text-white stapp-body-text">
          <p class="w-full md:w-auto">
            Helping you to&nbsp;
          </p>
          <div class="ml-8 md:ml-0 flex flex-col items-start">
            <p>grow on mobile</p>
            <p>
              improve the customer satisfaction
            </p>
            <p>
              reach your goals
            </p>
            <button class="-ml-8 mt-8 px-8 py-3 bg-stapp-pink rounded-full text-white text-xl font-bold">
              Talk to us
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Enable scrollTo smooth scrolling on Safari
import { polyfill } from 'seamless-scroll-polyfill'

export default {
  data () {
    return {
      sliderHeight: 64
    }
  },
  mounted () {
    polyfill()
    const slider = document.querySelector('.verbs-slider')
    slider.addEventListener('scroll', this.onScrollSlider)
    // The slider height is based on rem, so double check the value is correct
    this.sliderHeight = slider.clientHeight

    setTimeout(() => this.slide(), 2000)
  },
  methods: {
    slide () {
      const slider = document.querySelector('.verbs-slider')
      slider.scrollBy({ top: this.sliderHeight, behavior: 'smooth' })
      setTimeout(() => this.slide(), 2000)
    },
    onScrollSlider (event) {
      if (event.target.scrollTop === this.sliderHeight) {
        event.target.children.forEach((child, index) => {
          let currentOrder = child.style.order
          if (!currentOrder) {
            currentOrder = index + 1
          }
          const newOrder = currentOrder - 1
          child.style.order = newOrder < 1 ? 4 : newOrder
        })

        event.target.scroll({ top: '0' })
      }
    }
  }
}
</script>

<style lang="postcss" scoped>

@media (max-width: 1023px) {
  .main-section {
    height: calc(100vh - 5rem);
  }
}

.main-section {
  background-image: url('/img/bg/hero-bg.jpg');
  background-color: rgba(2, 0, 66, 0.8);
  background-blend-mode: darken;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}

.verbs-slider {
  overflow-y: hidden;
  /* transition: all 2s; */

  span {
    @apply my-2;
  }
}
</style>
