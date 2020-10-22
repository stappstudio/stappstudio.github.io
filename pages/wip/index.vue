<template>
  <div class="main-container">
    <Header />

    <Hero />

    <MainFeatures />

    <Features />

    <Informations />

    <TeamMembers />

    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header'),
    Hero: () => import('@/components/Hero'),
    MainFeatures: () => import('@/components/MainFeatures'),
    Features: () => import('@/components/Features'),
    Informations: () => import('@/components/Informations'),
    TeamMembers: () => import('@/components/TeamMembers'),
    Footer: () => import('@/components/Footer')
  }
}
</script>
