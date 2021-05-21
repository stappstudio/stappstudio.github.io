<template>
  <section class="bg-image w-full py-12 overflow-x-hidden">
    <div class="relative content-container">
      <div class="pt-36 pb-12 px-8 flex flex-col">
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
          <p>
            Helping you to&nbsp;
          </p>
          <div class="flex flex-col items-start">
            <p>grow on mobile</p>
            <p>
              satisfy your customers
            </p>
            <p>
              bring more clients
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
export default {
  data () {
    return {
      sliderHeight: 64
    }
  },
  mounted () {
    const slider = document.querySelector('.verbs-slider')
    slider.addEventListener('scroll', this.onScrollSlider)
    // The slider height is based on rem, so double check the value is correct
    this.sliderHeight = slider.clientHeight

    setInterval(() => {
      slider.scrollBy({ top: '64', behavior: 'smooth' })
    }, 2000)
  },
  methods: {
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
.bg-image {
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
