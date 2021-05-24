<template>
  <section class="main-section w-full py-12 overflow-x-hidden">
    <div class="relative content-container flex flex-col justify-center">
      <div class="w-full h-full lg:h-auto lg:pt-36 lg:pb-12 pl-8 pr-4 flex flex-col justify-center items-start">
        <div class="large-text w-full flex flex-wrap justify-start items-center text-4xl lg:text-5xl text-white stapp-heading-text">
          <span>{{ $t('we') }}&nbsp;&nbsp;</span>
          <div ref="slider" class="verbs-slider text-stapp-pink frame-one flex flex-col font-bold text-left h-16 overflow-x-hidden">
            <span v-for="verb in $t('verbs')" :key="verb">{{ verb }}&nbsp;&nbsp;</span>
            <!-- <span>{{ $t('design') }}</span>
            <span>{{ $t('develop') }}</span>
            <span>{{ $t('publish') }}</span> -->
          </div>
          <span class="w-8/12">{{ $t('high-quality') }}</span>
        </div>
        <div class="my-8 flex flex-wrap justify-start items-start text-xl text-white stapp-body-text">
          <p class="w-full md:w-auto">
            {{ $t('helping you') }}&nbsp;
          </p>
          <div class="ml-8 md:ml-0 flex flex-col items-start">
            <p>{{ $t('grow') }}</p>
            <p>{{ $t('improve satisfaction') }}</p>
            <p>{{ $t('reach goals') }}</p>
            <button class="-ml-8 mt-8 px-8 py-3 bg-stapp-pink rounded-full text-white text-xl font-bold">
              {{ $t('contact') }}
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
      sliderHeight: 64,
      timeoutId: undefined
    }
  },
  destroyed () {
    if (this.timeoutId) {
      const slider = document.querySelector('.verbs-slider')
      slider.scrollBy({ top: 0 })
      clearTimeout(this.timeoutId)
    }
  },
  mounted () {
    polyfill()
    const slider = document.querySelector('.verbs-slider')
    slider.addEventListener('scroll', this.onScrollSlider)
    // The slider height is based on rem, so double check the value is correct
    this.sliderHeight = slider.clientHeight

    if (this.timeoutId) {
      clearTimeout(this.timeoutId)
    }
    this.timeoutId = setTimeout(() => this.slide(), 2000)
  },
  methods: {
    slide () {
      const slider = document.querySelector('.verbs-slider')
      slider.scrollBy({ top: this.sliderHeight, behavior: 'smooth' })
      this.timeoutId = setTimeout(() => this.slide(), 2000)
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
    min-height: calc(100vh - 5rem);
  }

  .content-container {
    min-height: calc(100vh - 5rem);
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

.large-text {
  line-height: 3rem !important;
}

.verbs-slider {
  overflow-y: hidden;
  /* transition: all 2s; */

  span {
    @apply my-2;
    line-height: 3rem !important;
  }
}
</style>

<i18n>
{
  "en": {
    "we": "We",
    "verbs": [
      "craft",
      "design",
      "develop",
      "publish"
    ],
    "high-quality": "high-quality apps",
    "helping you": "Helping you to",
    "grow": "grow on mobile",
    "improve satisfaction": "improve the customer satisfaction",
    "reach goals": "reach your goals",
    "contact": "Talk to us"
  },
  "br": {
    "we": "Nós",
    "verbs": [
      "criamos",
      "projetamos",
      "desenvolvemos",
      "publicamos"
    ],
    "high-quality": "aplicativos de alta qualidade",
    "helping you": "Te ajudamos a",
    "grow": "crescer no mobile",
    "improve satisfaction": "melhorar a satisfação do usuário",
    "reach goals": "alcançar seus objetivos",
    "contact": "Entre em contato"
  }
}
</i18n>
