<template>
  <div class="brook-icon-boxes-area bg-white pb--60 pb_md--40 pb_sm--40 poss_relative">
    <div class="container pt--50">
      <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12 col-12">
          <div class="brook-section-title wow move-up">
            <h3 class="heading heading-h3 font-large text-secondary">
              Providing a complete app solution
            </h3>
            <hr class="mt--35 bg-primary" :style="{width: '200px', height: '5px'}">
            <!-- <div class="thumb mt--35">
              <img src="/img/service/icon-box/wavy-icon.png" alt="wavy icon">
            </div> -->
          </div>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12 col-12 mt_sm--40">
          <div class="brook-section-details wow move-up">
            <p class="bk_pra font-16 line-height-1-87">
              focus on creating creative, original, and conceptual works for editorial illustrations, magazines, covers, and brands as well as online visual organizations.
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div v-for="service in services" :key="service.id" class="col-lg-4 col-sm-6 wow move-up">
              <div class="icon-box text-center no-border bg-transparant mt--10">
                <div class="inner">
                  <div class="icon">
                    <img :src="service.icon" :alt="service.alt">
                  </div>
                  <div class="content">
                    <h5 class="heading heading-h5">
                      {{ service.heading }}
                    </h5>
                    <p class="bk_pra">
                      {{ service.text }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      services: [
        {
          id: 1,
          icon: '/img/icon/box-icon-01.png',
          alt: 'icon image',
          heading: 'UI/UX Design',
          text: 'Brook embraces a modern look with various enhanced pre-defined page elements.'
        },
        {
          id: 2,
          icon: '/img/icon/box-icon-02.gif',
          alt: 'icon image',
          heading: 'Development',
          text: 'We successfully implemented numerous UI/UX projects for both global & local clients.'
        },
        {
          id: 3,
          icon: '/img/icon/box-icon-03.gif',
          alt: 'icon image',
          heading: 'Deployment',
          text: 'Brook embraces a modern look with various enhanced pre-defined page elements.'
        }
      ]
    }
  }
}
</script>
