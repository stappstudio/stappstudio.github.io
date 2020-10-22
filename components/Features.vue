<template>
  <div class="brook-service-area bg_color--3">
    <div class="row align-items-center">
      <div class="row startupservice-wrapper">
        <div v-for="feature in features" :key="feature.id" class="col-lg-4 mt--40">
          <FeatureItem :feature="feature" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    FeatureItem: () => import('@/components/FeatureItem')
  },
  data () {
    return {
      features: [
        {
          id: 1,
          icon: 'ion-ios-infinite theme-color',
          heading: 'Digital Marketing',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 2,
          icon: 'ion-monitor',
          heading: 'UI/UX designs',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 3,
          icon: 'ion-ios-baseball-outline',
          heading: 'SEO marketing',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 4,
          icon: 'ion-pinpoint',
          heading: 'Resource use',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 5,
          icon: 'ion-pinpoint',
          heading: 'Resource use',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 6,
          icon: 'ion-pinpoint',
          heading: 'Resource use',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        }
      ]
    }
  }
}
</script>
