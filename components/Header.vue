<template>
  <FixedHeader>
    <header class="">
      <div class="d-flex align-items-stretch h-100">
        <div class="left-header d-flex justify-content-end align-items-center pl-3 pl-lg-5 pr-3 bg-secondary">
          <div class="half-container d-flex align-items-center flex-grow-1">
            <div class="logo flex-grow-1">
              <img class="py-3" src="/img/logo/stapp.png" alt="Stapp Studio Logo">
            </div>

            <div class="flex-shrink-0 text-white text-right lang-switcher">
              <template v-for="(locale, index) in $i18n.locales">
                <!-- Display a pipe between the locales -->
                <span v-if="index > 0" :key="'divider' + locale.code" class="px-1">|</span>

                <!-- The current locale is underlined and not clickable -->
                <span v-if="locale.code === $i18n.locale" :key="'name' + locale.code" class="font-weight-bold">
                  <!-- Show the short name at small screens -->
                  <div class="d-inline-block d-lg-none">
                    {{ locale.shortName }}
                  </div>
                  <div class="d-none d-lg-inline-block">
                    {{ locale.name }}
                  </div>
                </span>

                <!-- Available locales are shown as links -->
                <a
                  v-if="locale.code !== $i18n.locale"
                  :key="locale.code"
                  href="#"
                  class="text-white"
                  @click.prevent.stop="$i18n.setLocale(locale.code)"
                >
                  <!-- Show the short name at small screens -->
                  <div class="d-inline-block d-lg-none">
                    {{ locale.shortName }}
                  </div>
                  <div class="d-none d-lg-inline-block">
                    {{ locale.name }}
                  </div>
                </a>
              </template>
            </div>
          </div>
        </div>

        <div class="d-none d-md-block w-50 pl-5 pr-3 pr-lg-5 bg-primary">
          <div class="half-container d-flex text-right justify-content-end align-items-center h-100">
            <h5 class="stapp-heading-text font-weight-bold mb-0 text-white">
              <font-awesome-icon prefix="fas" icon="laptop-code" />
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
  },
  computed: {
    // Return which locale is available to switch to
    // Since we only have two locales we know this will always return one locale,
    //  but if someday we add more locales we will need to change this
    availableLocale () {
      return this.$i18n.locales.filter(i => i.code !== this.$i18n.locale)[0]
    },
    currentLocale () {
      return this.$i18n.locales.filter(i => i.code === this.$i18n.locale)[0]
    }
  }
}
</script>

<style lang="scss">
.vue-fixed-header--isFixed {
    top: 0;
    left: 0;
    width: 100%;
    z-index: 999;
    position: fixed !important;
    background-color: #333;
    box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.2);
    animation: 900ms cubic-bezier(0.2, 1, 0.22, 1) 0s normal none 1 running fadeInDown;
    padding-top: 0;
}

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

.lang-switcher {
  /* Extra small devices (phones, less than 768px) */
  font-size: 0.75rem;

  /* Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    font-size: 0.85rem;
  }

  a {
    text-decoration: none;
  }
}
</style>
