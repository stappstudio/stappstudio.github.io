<template>
  <div class="brook-service-area bg-secondary">
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
          icon: 'fas fa-code',
          heading: 'Digital Marketing',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 2,
          icon: 'fas fa-terminal',
          heading: 'UI/UX designs',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 3,
          icon: 'fas fa-file-code',
          heading: 'SEO marketing',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 4,
          icon: 'fas fa-bug',
          heading: 'Resource use',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 5,
          icon: 'fas fa-meteor',
          heading: 'Resource use',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        },
        {
          id: 6,
          icon: 'fas fa-plane',
          heading: 'Resource use',
          text: 'We conduct the marketing of products & services using latest digital technologies.'
        }
      ]
    }
  }
}
</script>
