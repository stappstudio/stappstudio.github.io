<template>
  <FixedHeader>
    <header class="">
      <div class="d-flex align-items-stretch h-100">
        <div class="left-header d-flex justify-content-end align-items-center pl-5 pr-5 bg-secondary">
          <div class="half-container d-flex align-items-center flex-grow-1">
            <div class="logo">
              <img class="py-3" src="/img/logo/stapp.png" alt="Stapp Studio Logo">
            </div>
          </div>
        </div>

        <div class="d-none d-md-block w-50 pl-5 pr-5 bg-primary">
          <div class="half-container d-flex text-right justify-content-end align-items-center h-100">
            <h5 class="stapp-heading-text font-weight-bold mb-0 text-white">
              <i class="fas fa-laptop-code" />
              {{ $t('header.slogan') }}
            </h5>
          </div>
        </div>
      </div>
    </header>
  </FixedHeader>
</template>

<script>
import FixedHeader from 'vue-fixed-header'

export default {
  components: {
    FixedHeader
  }
}
</script>

<style lang="scss">
.left-header {
  /* Extra small devices (phones, less than 768px) */
  width: 100%;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    width: 50%;
  }
}

.half-container {
  // The regular bootstrap container has a 1140 width
  //   Since this takes half the screen, let's use half width
  max-width: 570px;
}

.logo img {
  width: 150px
}
</style>
