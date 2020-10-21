<template>
  <div class="main-container">
    <Header />

    <HeroTwo />

    <IconBox />

    <TeamMembers />

    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import('@/components/Header'),
    // Hero: () => import('@/components/Hero'),
    HeroTwo: () => import('@/components/HeroTwo'),
    IconBox: () => import('@/components/IconBox'),
    TeamMembers: () => import('@/components/TeamMembers'),
    Footer: () => import('@/components/Footer')
  }
}
</script>
