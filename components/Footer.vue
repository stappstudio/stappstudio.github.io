<template>
  <footer class="page-footer bg-secondary pl--150 pr--150 pl_lp--40 pr_lp--40 pl_lg--30 pr_lg--30 pl_md--30 pr_md--30 pl_sm--20 pr_sm--20 pl_mobile--20 pr_mobile--20">
    <div class="container">
      <div class="bk-footer-inner pt--75 pb--50 pt_sm--40 pb_sm--20 pt_md--40 pb_md--20">
        <div class="row">
          <div class="col-lg-6 col-xl-6">
            <div class="bk-footer-widget">
              <h1 class="text-white mb-5">
                {{ $t('footer.message') }}
              </h1>
            </div>
          </div>

          <div class="col-lg-6 col-xl-5 offset-xl-1">
            <div class="bk-footer-widget menu--contact mt_md--30 mt_sm--30 text-xs-left text-lg-right">
              <h4 class="text-white line-height-1-2">
                {{ $t('footer.contactUs') }}
              </h4>
              <div class="bkseparator--35" />
              <div class="footer-address">
                <div class="row">
                  <div class="col-12">
                    <p class="bk_pra line-height-1-63 bk-hover">
                      <a class="text-white mb--20" :href="'mailto:' + $t('footer.email')">
                        {{ $t('footer.email') }}
                      </a>
                    </p>

                    <p class="bk_pra line-height-1-63 text-white">
                      R. Treze de Maio, 92, Cj 21A<br> Curitiba, PR, Brazil
                    </p>
                    <div class="mt-5">
                      <a v-for="social in socials" :key="social.id" :href="social.link" class="d-inline-block p-0 mr-3 mr-lg-0 ml-lg-4 text-white" target="_blank">
                        <i :class="['fab', 'fa-2x', social.iconName]" />
                      </a>
                      <!-- <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin" /></a>
                      <a href="https://github.com/stappstudio" target="_blank"><i class="fab fa-github" /></a>
                      <a href="https://instagram.com/stappstudio" target="_blank"><i class="fab fa-instagram" /></a>
                      <a href="https://twitter.com/stappstudio" target="_blank"><i class="fab fa-twitter" /></a> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Start Copyright Area -->
      <div class="copyright ptb--20">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="copyright-left text-lg-left text-center">
              <p class="text-white">
                Stapp Studio Desenvolvimento de Software LTDA<br>CNPJ 38.358.133/0001-07
              </p>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="copyright-right text-lg-right text-center">
              <p class="text-white">
                {{ $t('footer.copyright') }}
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
export default {
  data () {
    return {
      socials: [
        {
          id: 1,
          link: 'https://www.linkedin.com/',
          iconName: 'fa-linkedin'
        },
        {
          id: 2,
          link: 'https://github.com/stappstudio',
          iconName: 'fa-github'
        },
        {
          id: 3,
          link: 'https://instagram.com/stappstudio',
          iconName: 'fa-instagram'
        },
        {
          id: 4,
          link: 'https://twitter.com/stappstudio',
          iconName: 'fa-twitter'
        }
      ]
    }
  }
}
</script>

<style lang="scss">

</style>
