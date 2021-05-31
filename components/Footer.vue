<template>
  <footer class="page-footer bg-stapp-blue px-3 lg:px-5">
    <div class="content-container">
      <div class="pt-12 pb-6 lg:pb-12">
        <div class="flex flex-wrap items-start">
          <div class="w-full lg:w-1/2 px-6">
            <h1 class="text-4xl text-white stapp-heading-text mb-12">
              {{ $t('message') }}
            </h1>
          </div>
          <div class="w-full lg:w-1/2 px-6 mt-4 text-left lg:text-right">
            <h4 class="text-2xl text-white stapp-heading-text mb-12">
              {{ $t('contactUs') }}
            </h4>
            <div>
              <a class="text-white mb-6" :href="'mailto:' + $t('email')">
                {{ $t('email') }}
              </a>
              <p class="text-white">
                R. Treze de Maio, 92, Cj 21A<br> Curitiba, PR, Brazil
              </p>
              <div class="mt-12">
                <a
                  v-for="social in socials"
                  :key="social.id"
                  :href="social.link"
                  class="inline-block p-0 mr-4 lg:mr-0 lg:ml-6 text-white w-8 h-8"
                  target="_blank"
                >
                  <!-- eslint-disable-next-line -->
                  <div v-html="social.icon" class="fill-current" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Start Copyright Area -->
      <div class="mx-6 py-6">
        <div class="safe-area">
          <div class="flex flex-wrap items-center">
            <div class="w-full lg:w-1/2 copyright-left text-center lg:text-left">
              <p class="text-white mb-4">
                Stapp Studio Desenvolvimento de Software LTDA<br>CNPJ 38.358.133/0001-07
              </p>
            </div>
            <div class="w-full lg:w-1/2 copyright-right text-center lg:text-right">
              <p class="text-white">
                {{ $t('copyright') }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <!-- End Copyright Area -->
    </div>
  </footer>
</template>

<script>
import rawIconLinkedIn from '~/assets/icon/brands/linkedin.svg?raw'
import rawIconGitHub from '~/assets/icon/brands/github.svg?raw'
import rawIconInstagram from '~/assets/icon/brands/instagram.svg?raw'
import rawIconTwitter from '~/assets/icon/brands/twitter.svg?raw'

export default {
  data () {
    return {
      rawIconLinkedIn,
      socials: [
        {
          id: 1,
          icon: rawIconLinkedIn,
          link: 'https://www.linkedin.com/',
          faIconName: 'linkedin'
        },
        {
          id: 2,
          icon: rawIconGitHub,
          link: 'https://github.com/stappstudio',
          faIconName: 'github'
        },
        {
          id: 3,
          icon: rawIconInstagram,
          link: 'https://instagram.com/stappstudio',
          faIconName: 'instagram'
        },
        {
          id: 4,
          icon: rawIconTwitter,
          link: 'https://twitter.com/stappstudio',
          faIconName: 'twitter'
        }
      ]
    }
  }
}
</script>

<style scoped>
.safe-area {
  padding-bottom: env(safe-area-inset-bottom);
}
</style>

<i18n>
{
  "en": {
    "message": "Let's build something together?",
    "contactUs": "Get in touch",
    "email": "us@stapp.studio",
    "copyright": "© 2021 Stapp Studio. All Rights Reserved."
  },
  "br": {
    "message": "Vamos construir algo juntos?",
    "contactUs": "Entre em contato",
    "email": "contato@stapp.studio",
    "copyright": "© 2021 Stapp Studio. Todos os Direitos Reservados."
  }
}
</i18n>
