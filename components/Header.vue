<template>
  <FixedHeader>
    <header class="br_header header-default one-page-header light-logo-version headroom--sticky clearfix">
      <div class="header-wrapper">
        <div class="header-left-wrapper">
          <div class="branding">
            <div class="logo">
              <img src="/img/logo/stapp.png" alt="brook logo">
            </div>
          </div>
        </div>

        <div class="header-right-wrapper d-none d-sm-block">
          <div class="header-text text-right">
            <h5 class="heading heading-h5 font-20 text-white">
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

</style>
