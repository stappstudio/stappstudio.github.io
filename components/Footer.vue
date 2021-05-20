<template>
  <footer class="page-footer bg-stapp-blue px-3 lg:px-5">
    <div class="content-container">
      <div class="pt-12 pb-6 lg:pb-12">
        <div class="flex flex-wrap items-start">
          <div class="w-full lg:w-1/2 px-6">
            <h1 class="text-4xl text-white stapp-heading-text mb-12">
              {{ $t('footer.message') }}
            </h1>
          </div>
          <div class="w-full lg:w-1/2 px-6 mt-4 text-left lg:text-right">
            <h4 class="text-2xl text-white stapp-heading-text mb-12">
              {{ $t('footer.contactUs') }}
            </h4>
            <div>
              <a class="text-white mb-6" :href="'mailto:' + $t('footer.email')">
                {{ $t('footer.email') }}
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
                  <!-- <font-awesome-icon class="fa-2x" :icon="['fab', social.faIconName]" /> -->
                </a>
                <!-- <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin" /></a>
                <a href="https://github.com/stappstudio" target="_blank"><i class="fab fa-github" /></a>
                <a href="https://instagram.com/stappstudio" target="_blank"><i class="fab fa-instagram" /></a>
                <a href="https://twitter.com/stappstudio" target="_blank"><i class="fab fa-twitter" /></a> -->
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="grid grid-cols-1 lg:grid-cols-2">
          <div class="ml-6">
            <div class="bk-footer-widget">
              <h1 class="text-4xl text-white stapp-heading-text mb-12">
                {{ $t('footer.message') }}
              </h1>
            </div>
          </div>

          <div class="ml-6">
            <div class="mt-4 text-left lg:text-right">
              <h4 class="text-2xl text-white stapp-heading-text mb-12">
                {{ $t('footer.contactUs') }}
              </h4>
              <div class="footer-address">
                <div class="row">
                  <div class="col-12">
                    <p class="bk-hover">
                      <a class="text-white mb-6" :href="'mailto:' + $t('footer.email')">
                        {{ $t('footer.email') }}
                      </a>
                    </p>

                    <p class="text-white">
                      R. Treze de Maio, 92, Cj 21A<br> Curitiba, PR, Brazil
                    </p>
                    <div class="mt-12">
                      <a v-for="social in socials" :key="social.id" :href="social.link" class="d-inline-block p-0 mr-3 mr-lg-0 ml-lg-4 text-white" target="_blank">
                        <font-awesome-icon class="fa-2x" :icon="['fab', social.faIconName]" />
                      </a>
                      <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin" /></a>
                      <a href="https://github.com/stappstudio" target="_blank"><i class="fab fa-github" /></a>
                      <a href="https://instagram.com/stappstudio" target="_blank"><i class="fab fa-instagram" /></a>
                      <a href="https://twitter.com/stappstudio" target="_blank"><i class="fab fa-twitter" /></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>

      <!-- Start Copyright Area -->
      <div class="mx-6 py-6">
        <div class="flex flex-wrap items-center">
          <div class="w-full lg:w-1/2 copyright-left text-center lg:text-left">
            <p class="text-white mb-4">
              Stapp Studio Desenvolvimento de Software LTDA<br>CNPJ 38.358.133/0001-07
            </p>
          </div>
          <div class="w-full lg:w-1/2 copyright-right text-center lg:text-right">
            <p class="text-white">
              {{ $t('footer.copyright') }}
            </p>
          </div>
        </div>
      </div>
      <!-- End Copyright Area -->
    </div>
  </footer>
</template>

<script>
import rawIconLinkedIn from '~/assets/icon/linkedin.svg?raw'
import rawIconGitHub from '~/assets/icon/github.svg?raw'
import rawIconInstagram from '~/assets/icon/instagram.svg?raw'
import rawIconTwitter from '~/assets/icon/twitter.svg?raw'

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
