<template>
  <section class="main-section w-full overflow-x-hidden">
    <div class="relative py-12 content-container flex flex-col justify-center">
      <div class="w-full h-full lg:h-auto lg:pt-36 lg:pb-12 pl-8 pr-4 flex flex-col justify-center items-start">
        <div class="large-text w-full flex flex-wrap justify-start items-center text-4xl lg:text-5xl text-white stapp-heading-text">
          <span>{{ $t('we') }}&nbsp;&nbsp;</span>
          <div class="verbs-slider-wrapper text-stapp-pink font-bold text-left h-16 overflow-hidden">
            <div class="verbs-slider animated flex flex-col">
              <span v-for="verb in $t('verbs')" :key="verb">{{ verb }}&nbsp;&nbsp;</span>
            </div>
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
            <a :href="'mailto:' + $t('email')" class="-ml-8 mt-8 px-8 py-3 rounded-full text-xl font-bold bg-stapp-pink text-white hover:bg-white hover:text-stapp-blue">
              {{ $t('contact') }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Enable scrollTo smooth scrolling on Safari
// import { polyfill } from 'seamless-scroll-polyfill'

export default {
  data () {
    return {
      sliderHeight: 64,
      timeoutId: undefined
    }
  },
  destroyed () {
    const slider = document.querySelector('.verbs-slider')
    slider.removeEventListener('animationend', this.onSliderAnimationEnd)
    // JS version of the verbs slider animation
    // if (this.timeoutId) {
    //   const slider = document.querySelector('.verbs-slider')
    //   slider.scrollBy({ top: 0 })
    //   clearTimeout(this.timeoutId)
    // }
  },
  mounted () {
    const slider = document.querySelector('.verbs-slider')
    slider.addEventListener('animationend', this.onSliderAnimationEnd, { passive: true })

    // JS version of the slider animation
    // polyfill()
    // const slider = document.querySelector('.verbs-slider')
    // slider.addEventListener('scroll', this.onScrollSlider)
    // // The slider height is based on rem, so double check the value is correct
    // this.sliderHeight = slider.clientHeight

    // if (this.timeoutId) {
    //   clearTimeout(this.timeoutId)
    // }
    // this.timeoutId = setTimeout(() => this.slide(), 2000)
  },
  methods: {
    // JS version of the slider animation
    // slide () {
    //   const slider = document.querySelector('.verbs-slider')
    //   slider.scrollBy({ top: this.sliderHeight, behavior: 'smooth' })
    //   this.timeoutId = setTimeout(() => this.slide(), 2000)
    // },
    onSliderAnimationEnd (event) {
      // Remove animation
      event.target.classList.remove('animated')

      // How many children (aka verbs) we have?
      const numberOfChildren = event.target.children.length
      // Loop through all the verbs
      event.target.children.forEach((child, index) => {
        // Get the current flex order of the verb
        let currentOrder = child.style.order
        // At the first time this code runs, the element will NOT have an order
        //  So, we set the order based on the index
        if (!currentOrder) {
          currentOrder = index + 1
        }
        // Reduce the order by one
        const newOrder = currentOrder - 1
        // If the order is less than 1, this means this element was just shown
        //    So, we put it at the end of the queue
        child.style.order = newOrder < 1 ? numberOfChildren : newOrder
      })

      // Trigger a reflow to magically reset the css animation
      /* eslint-disable-next-line */
      void event.target.offsetWidth

      // Add the css animation again
      event.target.classList.add('animated')
    }
    // JS version of the slider animation
    // onScrollSlider (event) {
    //   // If the scroll if finished
    //   if (event.target.scrollTop === this.sliderHeight) {
    //     // How many children (aka verbs) we have?
    //     const numberOfChildren = event.target.children.length
    //     // Loop through all the verbs
    //     event.target.children.forEach((child, index) => {
    //       // Get the current flex order of the verb
    //       let currentOrder = child.style.order
    //       // At the first time this code runs, the element will NOT have an order
    //       //  So, we set the order based on the index
    //       if (!currentOrder) {
    //         currentOrder = index + 1
    //       }
    //       // Reduce the order by one
    //       const newOrder = currentOrder - 1
    //       // If the order is less than 1, this means this element was just shown
    //       //    So, we put it at the end of the queue
    //       child.style.order = newOrder < 1 ? numberOfChildren : newOrder
    //     })

    //     event.target.scroll({ top: '0' })
    //   }
    // }
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
  @media (max-width: 1023px) {
    background-image: url('/img/bg/hero-bg_sm.jpg');
  }

  @media (min-width: 1024px) {
    background-image: url('/img/bg/hero-bg.jpg');
  }
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
  &.animated {
    animation: slider-scroll 0.5s ease-out 2s;
  }

  span {
    @apply my-2;
    line-height: 3rem !important;
  }
}

@keyframes slider-scroll {
  0% {
    transform: translateY(0);
  }

  100% {
    transform: translateY(-4rem);
  }
}

button:focus {
  outline:0;
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
      "publish",
      "mantain"
    ],
    "high-quality": "high-quality apps",
    "helping you": "Helping you to",
    "grow": "grow on mobile",
    "improve satisfaction": "improve the customer satisfaction",
    "reach goals": "reach your goals",
    "contact": "Talk to us",
    "email": "us@stapp.studio"
  },
  "br": {
    "we": "Nós",
    "verbs": [
      "criamos",
      "projetamos",
      "desenvolvemos",
      "publicamos",
      "mantemos"
    ],
    "high-quality": "aplicativos de alta qualidade",
    "helping you": "Te ajudamos a",
    "grow": "crescer no mobile",
    "improve satisfaction": "melhorar a satisfação do usuário",
    "reach goals": "alcançar seus objetivos",
    "contact": "Entre em contato",
    "email": "contato@stapp.studio"
  }
}
</i18n>
